import { ethers } from 'ethers';

// ============================================
// ABI — DigitalCertificate Contract
// ============================================

export const CERTIFICATE_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'string', name: 'certificateId', type: 'string' },
      { indexed: false, internalType: 'string', name: 'recipientName', type: 'string' },
      { indexed: false, internalType: 'string', name: 'certificateType', type: 'string' },
      { indexed: false, internalType: 'uint256', name: 'issuedAt', type: 'uint256' },
    ],
    name: 'CertificateIssued',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'string', name: 'certificateId', type: 'string' },
      { indexed: false, internalType: 'uint256', name: 'revokedAt', type: 'uint256' },
    ],
    name: 'CertificateRevoked',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: '_certificateId', type: 'string' },
      { internalType: 'string', name: '_recipientName', type: 'string' },
      { internalType: 'string', name: '_certificateType', type: 'string' },
      { internalType: 'string', name: '_issuer', type: 'string' },
      { internalType: 'bytes32', name: '_certificateHash', type: 'bytes32' },
    ],
    name: 'issueCertificate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: '_certificateId', type: 'string' }],
    name: 'revokeCertificate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: '_certificateId', type: 'string' }],
    name: 'verifyCertificate',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'certificateId', type: 'string' },
          { internalType: 'string', name: 'recipientName', type: 'string' },
          { internalType: 'string', name: 'certificateType', type: 'string' },
          { internalType: 'string', name: 'issuer', type: 'string' },
          { internalType: 'uint256', name: 'issuedAt', type: 'uint256' },
          { internalType: 'bytes32', name: 'certificateHash', type: 'bytes32' },
          { internalType: 'bool', name: 'revoked', type: 'bool' },
          { internalType: 'bool', name: 'exists', type: 'bool' },
        ],
        internalType: 'struct DigitalCertificate.Cert',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

// ============================================
// CONFIG — dari environment variables
// ============================================

export const BLOCKCHAIN_CONFIG = {
  rpcUrl: import.meta.env.PUBLIC_RPC_URL || 'http://127.0.0.1:8545',
  contractAddress:
    import.meta.env.PUBLIC_CERTIFICATE_CONTRACT_ADDRESS ||
    '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  network: import.meta.env.PUBLIC_BLOCKCHAIN_NETWORK || 'hardhat-local',
  chainId: Number(import.meta.env.PUBLIC_CHAIN_ID || 31337),
  deploymentBlock: Number(
    import.meta.env.PUBLIC_CERTIFICATE_DEPLOYMENT_BLOCK || 0
  ),
};

// ============================================
// TYPES
// ============================================

export interface CertificateData {
  certificateId: string;
  recipientName: string;
  certificateType: string;
  issuer: string;
  issuedAt: number;
  certificateHash: string;
  revoked: boolean;
  exists: boolean;
}

export interface VerifyResult {
  success: boolean;
  data?: CertificateData;
  error?: string;
}

export interface BlockchainStatus {
  connected: boolean;
  network: string;
  rpcUrl: string;
  contractAddress: string;
  chainId: number;
  blockNumber?: number;
}

// ============================================
// PROVIDER — read-only
// ============================================

export function getProvider(): ethers.JsonRpcProvider {
  return new ethers.JsonRpcProvider(BLOCKCHAIN_CONFIG.rpcUrl);
}

export function getContract(): ethers.Contract {
  const provider = getProvider();
  return new ethers.Contract(
    BLOCKCHAIN_CONFIG.contractAddress,
    CERTIFICATE_ABI,
    provider
  );
}

// ============================================
// VERIFY CERTIFICATE
// ============================================

export async function verifyCertificate(
  certificateId: string
): Promise<VerifyResult> {
  try {
    const contract = getContract();
    const result = await contract.verifyCertificate(certificateId);

    if (!result || !result.exists) {
      return {
        success: false,
        error: 'Certificate tidak ditemukan di blockchain.',
      };
    }

    return {
      success: true,
      data: {
        certificateId: result.certificateId,
        recipientName: result.recipientName,
        certificateType: result.certificateType,
        issuer: result.issuer,
        issuedAt: Number(result.issuedAt),
        certificateHash: result.certificateHash,
        revoked: result.revoked,
        exists: result.exists,
      },
    };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Unknown error saat membaca blockchain.';
    return {
      success: false,
      error: `Gagal baca blockchain: ${message}`,
    };
  }
}

// ============================================
// GET CERTIFICATE TX HASH
// ============================================

const TX_CACHE_PREFIX = 'certificate_tx_';

export async function getCertificateTxHash(
  certificateId: string
): Promise<string | null> {
  if (!certificateId) return null;

  // Cek cache dulu (tapi cache bukan sumber kebenaran)
  try {
    const cached =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem(TX_CACHE_PREFIX + certificateId)
        : null;
    if (cached && cached.startsWith('0x')) {
      return cached;
    }
  } catch {
    // localStorage tidak tersedia — lanjut tanpa cache
  }

  try {
    const provider = getProvider();
    const contract = new ethers.Contract(
      BLOCKCHAIN_CONFIG.contractAddress,
      CERTIFICATE_ABI,
      provider
    );

    const deploymentBlock = BLOCKCHAIN_CONFIG.deploymentBlock || 0;

    // Filter langsung by certificateId — ethers hash otomatis
    const filter = contract.filters.CertificateIssued(certificateId);

    const currentBlock = await provider.getBlockNumber();
    const CHUNK = 9999;

    for (let from = deploymentBlock; from <= currentBlock; from += CHUNK) {
      const to = Math.min(from + CHUNK - 1, currentBlock);
      try {
        const events = await contract.queryFilter(filter, from, to);
        if (events.length > 0) {
          const txHash = events[0].transactionHash;

          // Simpan ke cache
          try {
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem(TX_CACHE_PREFIX + certificateId, txHash);
            }
          } catch {
            // ignore cache error
          }

          return txHash;
        }
      } catch {
        // skip chunk yang error
        continue;
      }
    }

    return null;
  } catch (e) {
    console.warn('getCertificateTxHash failed:', e);
    return null;
  }
}

// ============================================
// BLOCKCHAIN STATUS
// ============================================

export async function getBlockchainStatus(): Promise<BlockchainStatus> {
  const base = {
    network: BLOCKCHAIN_CONFIG.network,
    rpcUrl: BLOCKCHAIN_CONFIG.rpcUrl,
    contractAddress: BLOCKCHAIN_CONFIG.contractAddress,
    chainId: BLOCKCHAIN_CONFIG.chainId,
  };

  try {
    const provider = getProvider();
    const blockNumber = await provider.getBlockNumber();
    return {
      ...base,
      connected: true,
      blockNumber,
    };
  } catch {
    return {
      ...base,
      connected: false,
    };
  }
}

// ============================================
// HELPERS
// ============================================

export function formatAddress(address: string): string {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatHash(hash: string): string {
  if (!hash || hash.length < 10) return hash;
  return `${hash.slice(0, 10)}...${hash.slice(-8)}`;
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}