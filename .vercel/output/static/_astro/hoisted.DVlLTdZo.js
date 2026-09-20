import{g as f,B as l,C as k,a as g,I as b}from"./blockchain.DbLgSm1v.js";import"./hoisted.z0XPQpv7.js";const y=localStorage.getItem("admin_wallet");y||(window.location.href="/admin/login");const p=document.getElementById("logout-btn");p&&p.addEventListener("click",()=>{localStorage.removeItem("admin_wallet"),localStorage.removeItem("admin_connected_at"),window.location.href="/admin/login"});const B=11728e3;async function E(){const t=document.getElementById("blockchain-status");if(t)try{const e=await f().getBlockNumber();t.innerHTML=`
        <div class="status-header">
          <div class="status-dot status-online"></div>
          <div>
            <strong>Blockchain Connected</strong>
            <small>Latest block: #${e}</small>
          </div>
        </div>
        <div class="status-details">
          <div class="status-item">
            <span class="status-item-label">Network</span>
            <span class="status-item-value">${l.network}</span>
          </div>
          <div class="status-item">
            <span class="status-item-label">Chain ID</span>
            <span class="status-item-value">${l.chainId}</span>
          </div>
          <div class="status-item">
            <span class="status-item-label">Contract</span>
            <span class="status-item-value">${l.contractAddress}</span>
          </div>
          <div class="status-item">
            <span class="status-item-label">Connected Wallet</span>
            <span class="status-item-value">${y}</span>
          </div>
        </div>
      `}catch{t.innerHTML=`
        <div class="status-header">
          <div class="status-dot status-offline"></div>
          <div>
            <strong>Blockchain Offline</strong>
            <small>Unable to connect to Sepolia network.</small>
          </div>
        </div>
      `}}async function L(t,s){const e=t.runner?.provider;if(!e)return[];const i=await e.getBlockNumber(),a=9999,c=[];for(let n=B;n<=i;n+=a){const r=Math.min(n+a-1,i);try{const o=await t.queryFilter(s,n,r);c.push(...o)}catch(o){console.warn(`Skip chunk ${n}-${r}:`,o.message)}}return c}async function $(t,s){try{const e=await t.getTransaction(s);if(!e||!e.data)return"—";const a=new b(g).parseTransaction({data:e.data});return a&&a.args&&a.args.length>0?a.args[0]:"—"}catch(e){return console.warn("Failed to decode certId:",e),"—"}}async function S(){const t=document.getElementById("recent-certificates");if(t)try{const s=f(),e=new k(l.contractAddress,g,s),i=e.filters.CertificateIssued(),a=await L(e,i),c=a.length,n=document.getElementById("stat-total"),r=document.getElementById("stat-valid"),o=document.getElementById("stat-revoked"),u=document.getElementById("stat-records");if(n&&(n.textContent=c.toString()),r&&(r.textContent=c.toString()),o&&(o.textContent="0"),u&&(u.textContent=c.toString()),c===0){t.innerHTML=`
          <div class="empty-state">
            <strong>No certificates yet</strong>
            <p>Create your first digital certificate.</p>
            <a href="/admin/certificates/create" class="btn">Create Certificate →</a>
          </div>
        `;return}const I=a.slice(-5).reverse();let d='<div class="cert-list">';for(const m of I){const v=m.args,h=v[1],C=v[2],w=await $(s,m.transactionHash);d+=`
          <div class="cert-row">
            <span class="cert-id">${w}</span>
            <span class="cert-name">${h}</span>
            <span class="cert-type">${C}</span>
            <span class="cert-status valid">VALID</span>
          </div>
        `}d+="</div>",t.innerHTML=d}catch(s){t.innerHTML=`
        <div class="empty-state">
          <strong>Unable to load certificates</strong>
          <p>${s.message||"Please check your connection to Sepolia."}</p>
          <button class="btn-secondary" onclick="location.reload()">Retry</button>
        </div>
      `}}E();S();
