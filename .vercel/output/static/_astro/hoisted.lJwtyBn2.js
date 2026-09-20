import{h as a,c as o}from"./writeContract.B6v_iqhI.js";import"./hoisted.z0XPQpv7.js";import"./blockchain.DbLgSm1v.js";import"./provider-browser.Bi7B95w3.js";const s=document.getElementById("login-content");function r(){s&&(s.innerHTML=`
      <div class="status-message error">
        <strong>MetaMask is required.</strong><br />
        Install MetaMask to access the admin panel.
      </div>
      <a href="https://metamask.io/download/" target="_blank" rel="noopener" class="action-btn" style="margin-top: 1rem; text-decoration: none;">
        Install MetaMask →
      </a>
    `)}function i(){if(!s)return;s.innerHTML=`
      <button class="action-btn" id="connect-btn">
        Connect MetaMask
      </button>
      <div id="status-slot"></div>
    `,document.getElementById("connect-btn")?.addEventListener("click",c)}async function c(){const t=document.getElementById("connect-btn"),n=document.getElementById("status-slot");if(!(!t||!n)){t.disabled=!0,t.textContent="Connecting...";try{const e=await o();if(!e.isOwner){n.innerHTML=`
          <div class="status-message error">
            <strong>Access denied.</strong><br />
            Connected wallet is not authorized. Only the contract owner can access this panel.
          </div>
          <div class="wallet-info">
            <div><strong>Connected:</strong> ${e.address}</div>
          </div>
        `,t.disabled=!1,t.textContent="Connect MetaMask";return}n.innerHTML=`
        <div class="status-message success">
          <strong>Access granted.</strong><br />
          Redirecting to dashboard...
        </div>
        <div class="wallet-info">
          <div><strong>Wallet:</strong> ${e.address}</div>
        </div>
      `,localStorage.setItem("admin_wallet",e.address),localStorage.setItem("admin_connected_at",Date.now().toString()),setTimeout(()=>{window.location.href="/admin"},1e3)}catch(e){n.innerHTML=`
        <div class="status-message error">
          ${e.message||"Failed to connect."}
        </div>
      `,t.disabled=!1,t.textContent="Connect MetaMask"}}}a()?i():r();
