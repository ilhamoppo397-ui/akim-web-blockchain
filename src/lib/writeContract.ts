import { ethers } from 'ethers';
import { CERTIFICATE_ABI, BLOCKCHAIN_CONFIG } from './blockchain';

// ============================================
// TYPES
// ============================================

export interface WalletInfo {
  address: string;
  chainId: number;
  isOwner: boolean;
}

export interface IssueResult {
  success: boolean;
  txHash?: string;
  blockNumber?: number;
  certificateId?: string;
  error?: string;
}

// ============================================
// CHECK METAMASK
// ============================================

export function hasMetaMask(): boolean {
  return typeof window !== 'undefined' && !!(window as any).ethereum;
}

// ============================================
// CONNECT METAMASK
// ============================================

export async function connectMetaMask(): Promise<WalletInfo> {
  if (!hasMetaMask()) {
    throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
  }

  const ethereum = (window as any).ethereum;

  try {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    if (!accounts || accounts.length === 0) {
      throw new Error('No wallet connected.');
    }

    const address = accounts[0];
    const chainIdHex = await ethereum.request({ method: 'eth_chainId' });
    const chainId = parseInt(chainIdHex, 16);

    // Check network — Sepolia = 11155111
    if (chainId !== BLOCKCHAIN_CONFIG.chainId) {
      throw new Error(
        `Wrong network. Please switch MetaMask to Sepolia Testnet.`
      );
    }

    // Check if owner
    const isOwner = await checkIfOwner(address);

    return {
      address,
      chainId,
      isOwner,
    };
  } catch (err: any) {
    if (err.code === 4001) {
      throw new Error('Connection rejected in MetaMask.');
    }
    throw new Error(err.message || 'Failed to connect MetaMask.');
  }
}

// ============================================
// CHECK IF OWNER
// ============================================

export async function checkIfOwner(address: string): Promise<boolean> {
  try {
    const provider = new ethers.JsonRpcProvider(BLOCKCHAIN_CONFIG.rpcUrl);
    const contract = new ethers.Contract(
      BLOCKCHAIN_CONFIG.contractAddress,
      CERTIFICATE_ABI,
      provider
    );
    const owner = await contract.getOwner();
    return owner.toLowerCase() === address.toLowerCase();
  } catch {
    return false;
  }
}

// ============================================
// ISSUE CERTIFICATE (via MetaMask)
// ============================================

export async function issueCertificate(
  certificateId: string,
  recipientName: string,
  certificateType: string,
  issuer: string
): Promise<IssueResult> {
  if (!hasMetaMask()) {
    return {
      success: false,
      error: 'MetaMask is not installed.',
    };
  }

  const ethereum = (window as any).ethereum;

  try {
    // 1. Get signer (via MetaMask — bukan private key)
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();

    // 2. Verify network
    const network = await provider.getNetwork();
    if (Number(network.chainId) !== BLOCKCHAIN_CONFIG.chainId) {
      return {
        success: false,
        error: 'Wrong network. Please switch to Sepolia Testnet in MetaMask.',
      };
    }

    // 3. Verify owner
    const signerAddress = await signer.getAddress();
    const isOwner = await checkIfOwner(signerAddress);
    if (!isOwner) {
      return {
        success: false,
        error: 'Your wallet is not authorized. Only the contract owner can issue certificates.',
      };
    }

    // 4. Prepare contract
    const contract = new ethers.Contract(
      BLOCKCHAIN_CONFIG.contractAddress,
      CERTIFICATE_ABI,
      signer
    );

    // 5. Generate certificate hash
    const certHash = ethers.keccak256(
      ethers.toUtf8Bytes(`${certificateId}-${recipientName}-${certificateType}`)
    );

    // 6. Send transaction
    const tx = await contract.issueCertificate(
      certificateId,
      recipientName,
      certificateType,
      issuer,
      certHash
    );

    // 7. Wait for confirmation
    const receipt = await tx.wait();

    return {
      success: true,
      txHash: receipt.hash,
      blockNumber: receipt.blockNumber,
      certificateId,
    };
  } catch (err: any) {
    if (err.code === 4001) {
      return {
        success: false,
        error: 'Transaction rejected in MetaMask.',
      };
    }
    if (err.code === 'INSUFFICIENT_FUNDS') {
      return {
        success: false,
        error: 'Insufficient ETH for gas. Please add SepoliaETH to your wallet.',
      };
    }
    if (err.message?.includes('Certificate already exists')) {
      return {
        success: false,
        error: `Certificate ID "${certificateId}" already exists on the blockchain.`,
      };
    }
    return {
      success: false,
      error: err.message || 'Transaction failed. Please try again.',
    };
  }
}