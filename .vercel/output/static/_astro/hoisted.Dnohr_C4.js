import{d as e}from"./blockchain.DbLgSm1v.js";import"./hoisted.z0XPQpv7.js";async function n(){const t=document.getElementById("blockchain-status");if(!t)return;const s=await e();s.connected?t.innerHTML=`
        <div class="status-dot status-online"></div>
        <div class="status-text">
          <strong>Blockchain Connected</strong>
          <small>Network: ${s.network} · Block #${s.blockNumber}</small>
        </div>
      `:t.innerHTML=`
        <div class="status-dot status-offline"></div>
        <div class="status-text">
          <strong>Blockchain Offline</strong>
          <small>Ga bisa connect ke RPC. Cek koneksi internet atau endpoint.</small>
        </div>
      `}n();setInterval(n,15e3);
