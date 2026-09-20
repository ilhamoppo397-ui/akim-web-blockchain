import{g as v,C as h,B as y,a as g,I}from"./blockchain.DbLgSm1v.js";import"./hoisted.z0XPQpv7.js";const E=localStorage.getItem("admin_wallet");E||(window.location.href="/admin/login");const w=11728e3;let m=[];async function C(s,t){const n=s.runner?.provider;if(!n)return[];const o=await n.getBlockNumber(),c=9999,a=[];for(let e=w;e<=o;e+=c){const u=Math.min(e+c-1,o);try{const l=await s.queryFilter(t,e,u);a.push(...l)}catch{}}return a}async function B(s,t){try{const n=await s.getTransaction(t);if(!n||!n.data)return"—";const c=new I(g).parseTransaction({data:n.data});return c?.args?.[0]?c.args[0]:"—"}catch{return"—"}}async function L(){const s=document.getElementById("certs-container");if(s)try{const t=v(),n=new h(y.contractAddress,g,t),o=n.filters.CertificateIssued(),c=await C(n,o);m=[];for(const a of c){const e=a.args,u=e[1],l=e[2],i=Number(e[3]),d=await B(t,a.transactionHash);m.push({certId:d,recipient:u,type:l,issuedAt:i,txHash:a.transactionHash,blockNumber:a.blockNumber})}p()}catch(t){s.innerHTML=`
        <div class="empty-state">
          <strong>Unable to load certificates</strong>
          <p>${t.message||"Please check your connection to Sepolia."}</p>
          <button class="btn-secondary" onclick="location.reload()">Retry</button>
        </div>
      `}}function p(){const s=document.getElementById("certs-container"),t=document.getElementById("list-footer"),n=document.getElementById("list-count");if(!s)return;const o=document.getElementById("search-input"),c=document.getElementById("filter-select"),a=document.getElementById("sort-select"),e=(o?.value||"").toLowerCase().trim(),u=c?.value||"all",l=a?.value||"newest";let i=m.filter(r=>!(e&&!(r.certId.toLowerCase().includes(e)||r.recipient.toLowerCase().includes(e)||r.type.toLowerCase().includes(e))||u==="revoked"));if(i=i.sort((r,f)=>l==="newest"?f.issuedAt-r.issuedAt:r.issuedAt-f.issuedAt),i.length===0){s.innerHTML=`
        <div class="empty-state">
          <strong>No certificate found</strong>
          <p>Coba ubah filter atau search keyword.</p>
        </div>
      `,t&&(t.hidden=!0);return}let d='<div class="cert-table">';d+=`
      <div class="cert-header">
        <div>Certificate ID</div>
        <div>Recipient</div>
        <div>Type</div>
        <div>Status</div>
      </div>
    `;for(const r of i){const f=`/admin/certificates/detail?id=${encodeURIComponent(r.certId)}`;d+=`
        <a href="${f}" class="cert-row">
          <span class="cert-id">${r.certId}</span>
          <span class="cert-name">${r.recipient}</span>
          <span class="cert-type">${r.type}</span>
          <span class="cert-status valid">VALID</span>
        </a>
      `}d+="</div>",s.innerHTML=d,t&&n&&(t.hidden=!1,n.textContent=`Showing ${i.length} of ${m.length} certificate${m.length!==1?"s":""}`)}const b=document.getElementById("search-input"),A=document.getElementById("filter-select"),$=document.getElementById("sort-select");b?.addEventListener("input",p);A?.addEventListener("change",p);$?.addEventListener("change",p);L();
