import{B as l,J as f,C as m,a as v}from"./blockchain.DbLgSm1v.js";import{h as u,i as p}from"./writeContract.B6v_iqhI.js";import{B as g}from"./provider-browser.Bi7B95w3.js";import"./hoisted.z0XPQpv7.js";const w=localStorage.getItem("admin_wallet");w||(window.location.href="/admin/login");const a=document.getElementById("wallet-status"),c=document.getElementById("create-form"),e=document.getElementById("submit-btn"),n=document.getElementById("result-slot");async function h(){if(a){if(!u()){a.innerHTML=`
        <div class="status-dot status-offline"></div>
        <div>
          <strong>MetaMask not installed</strong>
          <small>Install MetaMask to issue certificates.</small>
        </div>
      `,e&&(e.disabled=!0);return}try{const i=new g(window.ethereum),r=await i.getNetwork(),s=await(await i.getSigner()).getAddress();if(Number(r.chainId)!==l.chainId){a.innerHTML=`
          <div class="status-dot status-offline"></div>
          <div>
            <strong>Wrong network</strong>
            <small>Please switch MetaMask to Sepolia Testnet.</small>
          </div>
        `,e&&(e.disabled=!0);return}const d=new f(l.rpcUrl);if(!((await new m(l.contractAddress,v,d).getOwner()).toLowerCase()===s.toLowerCase())){a.innerHTML=`
          <div class="status-dot status-offline"></div>
          <div>
            <strong>Wallet not authorized</strong>
            <small>Only the contract owner can issue certificates.</small>
          </div>
        `,e&&(e.disabled=!0);return}a.innerHTML=`
        <div class="status-dot status-online"></div>
        <div>
          <strong>Wallet connected · Owner</strong>
          <small>${s}</small>
        </div>
      `,e&&(e.disabled=!1)}catch{a.innerHTML=`
        <div class="status-dot status-offline"></div>
        <div>
          <strong>Wallet not connected</strong>
          <small>Please connect MetaMask in the login page.</small>
        </div>
      `,e&&(e.disabled=!0)}}}async function b(i){if(i.preventDefault(),!n||!e)return;const r=document.getElementById("cert-id").value.trim(),o=document.getElementById("recipient").value.trim(),s=document.getElementById("cert-type").value.trim(),d=document.getElementById("issuer").value.trim();if(!r||!o||!s||!d){n.innerHTML=`
        <div class="result-box error">
          <h3>⚠ Form tidak lengkap</h3>
          <p>Isi semua field dulu.</p>
        </div>
      `;return}e.disabled=!0,e.textContent="Waiting for MetaMask...",n.innerHTML=`
      <div class="result-box info">
        <h3>⏳ Menunggu konfirmasi MetaMask</h3>
        <p>Konfirmasi transaksi di MetaMask untuk melanjutkan.</p>
      </div>
    `;try{const t=await p(r,o,s,d);if(!t.success){n.innerHTML=`
          <div class="result-box error">
            <h3>✗ Gagal issue certificate</h3>
            <p>${t.error}</p>
          </div>
        `,e.disabled=!1,e.textContent="Issue Certificate →";return}n.innerHTML=`
        <div class="result-box success">
          <h3>✓ Certificate Issued Successfully</h3>
          <p>Sertifikat berhasil terbit dan tercatat di Sepolia blockchain.</p>

          <div class="result-details">
            <div>
              <span>Certificate ID</span>
              <span>${t.certificateId}</span>
            </div>
            <div>
              <span>Recipient</span>
              <span>${o}</span>
            </div>
            <div>
              <span>Type</span>
              <span>${s}</span>
            </div>
            <div>
              <span>Network</span>
              <span>${l.network}</span>
            </div>
            <div>
              <span>Tx Hash</span>
              <span>${t.txHash}</span>
            </div>
            <div>
              <span>Block</span>
              <span>#${t.blockNumber}</span>
            </div>
          </div>

          <div class="result-actions">
            <a href="/certificate/verify?id=${t.certificateId}" class="btn" target="_blank">
              Verify Certificate →
            </a>
            <a href="https://sepolia.etherscan.io/tx/${t.txHash}" class="btn-secondary" target="_blank" rel="noopener">
              View on Etherscan
            </a>
            <a href="/admin" class="btn-secondary">
              Back to Dashboard
            </a>
          </div>
        </div>
      `,c.reset(),document.getElementById("issuer").value="Akim",e.disabled=!1,e.textContent="Issue Certificate →"}catch(t){n.innerHTML=`
        <div class="result-box error">
          <h3>✗ Error</h3>
          <p>${t.message||"Unknown error."}</p>
        </div>
      `,e.disabled=!1,e.textContent="Issue Certificate →"}}h();c&&c.addEventListener("submit",b);u()&&(window.ethereum.on("chainChanged",()=>window.location.reload()),window.ethereum.on("accountsChanged",()=>window.location.reload()));
