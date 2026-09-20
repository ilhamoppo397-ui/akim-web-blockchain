import{g as b,C as m,B as o,a as g}from"./blockchain.DbLgSm1v.js";import{b as k}from"./browser.CjSdxGTc.js";import{B as w}from"./provider-browser.Bi7B95w3.js";import"./hoisted.z0XPQpv7.js";const h=localStorage.getItem("admin_wallet");h||(window.location.href="/admin/login");const C=new URLSearchParams(window.location.search),r=C.get("id")||"",p=document.getElementById("cert-title"),u=document.getElementById("cert-status-badge"),c=document.getElementById("detail-content");async function y(){if(c){if(!r){c.innerHTML=f("Certificate ID tidak valid.");return}p&&(p.textContent=r);try{const e=b(),t=await new m(o.contractAddress,g,e).verifyCertificate(r);if(!t||!t.exists){c.innerHTML=f(`Certificate dengan ID "${r}" tidak ditemukan di blockchain.`);return}const n={certificateId:t.certificateId,recipientName:t.recipientName,certificateType:t.certificateType,issuer:t.issuer,issuedAt:Number(t.issuedAt),certificateHash:t.certificateHash,revoked:t.revoked,exists:t.exists};if(u){const v=n.revoked?"revoked":"valid",d=n.revoked?"Revoked":"Valid";u.innerHTML=`<span class="status-badge ${v}">${d}</span>`}c.innerHTML=I(n);const s=`https://certificate.akim.web.id/certificate/verify?id=${n.certificateId}`;await $(s),E(n)}catch(e){c.innerHTML=f(`Gagal baca blockchain: ${e.message||"Unknown error."}`)}}}function I(e){const a=new Date(e.issuedAt*1e3).toLocaleString("id-ID",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),t=`https://certificate.akim.web.id/certificate/verify?id=${e.certificateId}`;return`
      <section class="section">
        <div class="section-title">Certificate Information</div>
        <div class="info-row">
          <span class="info-label">Certificate ID</span>
          <span class="info-value mono">${i(e.certificateId)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Recipient</span>
          <span class="info-value">${i(e.recipientName)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Certificate Type</span>
          <span class="info-value">${i(e.certificateType)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Issuer</span>
          <span class="info-value">${i(e.issuer)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Issued At</span>
          <span class="info-value">${a}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Status</span>
          <span class="info-value">${e.revoked?"Revoked":"Valid"}</span>
        </div>
      </section>

      <section class="section">
        <div class="section-title">Blockchain Record</div>
        <div class="info-row">
          <span class="info-label">Network</span>
          <span class="info-value mono">${i(o.network)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Contract Address</span>
          <span class="info-value mono">${i(o.contractAddress)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Certificate Hash</span>
          <span class="info-value mono">${i(e.certificateHash)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Verification URL</span>
          <span class="info-value mono">${i(t)}</span>
        </div>
      </section>

      <section class="section">
        <div class="section-title">QR Code</div>
        <div class="qr-section">
          <div class="qr-image-wrap">
            <canvas id="qr-canvas"></canvas>
          </div>
          <div class="qr-info">
            <div class="qr-caption">${i(t)}</div>
            <div class="qr-actions">
              <a href="${t}" target="_blank" rel="noopener" class="btn">Open Verification Page</a>
              <button class="btn-secondary" id="download-qr-btn">Download QR</button>
            </div>
          </div>
        </div>
      </section>

      ${e.revoked?`
        <div class="danger-zone" style="background: rgba(245,158,11,0.04); border-color: rgba(245,158,11,0.2);">
          <h3 style="color: var(--warning);">Certificate Revoked</h3>
          <p>Certificate ini sudah dicabut. Status permanen di blockchain.</p>
        </div>
      `:`
        <div class="danger-zone">
          <h3>⚠ Danger Zone</h3>
          <p>
            Revoke certificate akan mengubah statusnya menjadi <strong>REVOKED</strong> di blockchain.
            Tindakan ini <strong>permanen</strong> dan tidak bisa dibatalkan.
          </p>
          <button class="btn-danger" id="revoke-btn">Revoke Certificate</button>
        </div>
      `}
    `}async function $(e){const a=document.getElementById("qr-canvas");if(!a)return;try{await k.toCanvas(a,e,{width:200,margin:2,color:{dark:"#000000",light:"#ffffff"}})}catch(n){console.warn("QR generation failed:",n)}const t=document.getElementById("download-qr-btn");t&&t.addEventListener("click",()=>{const n=a.toDataURL("image/png"),s=document.createElement("a");s.href=n,s.download=`${r}-qr.png`,s.click()})}function E(e){const a=document.getElementById("revoke-btn");a&&a.addEventListener("click",async()=>{if(confirm(`Yakin mau revoke certificate "${e.certificateId}"?

Tindakan ini permanen.`)){a.disabled=!0,a.textContent="Waiting for MetaMask...";try{const n=await new w(window.ethereum).getSigner(),d=await(await new m(o.contractAddress,g,n).revokeCertificate(e.certificateId)).wait(),l=document.createElement("div");l.className="result-box success",l.innerHTML=`
          <h3>✓ Certificate Revoked</h3>
          <p>
            Certificate <strong>${i(e.certificateId)}</strong> berhasil dicabut.
            Tx Hash: <code>${d.hash}</code>
          </p>
        `,a.parentElement?.appendChild(l),setTimeout(()=>location.reload(),2e3)}catch(t){a.disabled=!1,a.textContent="Revoke Certificate";const n=document.createElement("div");n.className="result-box error",n.innerHTML=`
          <h3>✗ Gagal Revoke</h3>
          <p>${i(t.message||"Transaction failed.")}</p>
        `,a.parentElement?.appendChild(n)}}})}function f(e){return`
      <div class="error-box">
        <h3>⚠ Error</h3>
        <p>${i(e)}</p>
        <a href="/admin/certificates" class="btn-secondary">← Back to List</a>
      </div>
    `}function i(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}y();
