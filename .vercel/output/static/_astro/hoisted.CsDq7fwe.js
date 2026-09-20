import"./hoisted.z0XPQpv7.js";const B={XAUUSD:{contractSize:100,unit:"oz",minimumLot:.01,lotStep:.01},FOREX:{contractSize:1e5,unit:"unit",minimumLot:.01,lotStep:.01},CRYPTO:{contractSize:1,unit:"coin",minimumLot:1e-5,lotStep:1e-5},CUSTOM:{contractSize:1,unit:"unit",minimumLot:.01,lotStep:.01}};function n(s,e=2){return isFinite(s)?s.toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}):"—"}function D(){const s=parseFloat(document.getElementById("rc-modal").value),e=parseFloat(document.getElementById("rc-risk").value),a=parseFloat(document.getElementById("rc-entry").value),l=parseFloat(document.getElementById("rc-sl").value),r=document.getElementById("rc-direction").value,c=document.getElementById("rc-instrument").value,d=parseFloat(document.getElementById("rc-contract").value),o=parseFloat(document.getElementById("rc-min-lot").value),v=parseFloat(document.getElementById("rc-lot-step").value),g=document.getElementById("rc-tp").value,i=g?parseFloat(g):null,T=B[c]||B.CUSTOM;if(!isFinite(s)||s<=0)return u("Modal harus lebih dari 0.");if(!isFinite(e)||e<=0||e>100)return u("Risiko harus antara 0 dan 100 persen.");if(!isFinite(a)||a<=0)return u("Harga entry harus lebih dari 0.");if(!isFinite(l)||l<=0)return u("Stop loss harus lebih dari 0.");if(r==="BUY"&&l>=a)return u("Stop Loss tidak valid untuk posisi BUY. SL harus di bawah entry.");if(r==="SELL"&&l<=a)return u("Stop Loss tidak valid untuk posisi SELL. SL harus di atas entry.");if(i!=null&&isFinite(i)&&i>0){if(r==="BUY"&&i<=a)return u("Take Profit tidak valid untuk posisi BUY. TP harus di atas entry.");if(r==="SELL"&&i>=a)return u("Take Profit tidak valid untuk posisi SELL. TP harus di bawah entry.")}if(!isFinite(d)||d<=0)return u("Contract size harus lebih dari 0.");const p=s*(e/100),m=Math.abs(a-l),M=m/a*100,k=p/m,b=k/d,z=k*a;let f=null,w=null,h=null;i!=null&&isFinite(i)&&i>0&&(f=Math.abs(i-a),w=k*f,h=f/m);let E=!1,$=null,L=!1;o>0&&b<o&&(E=!0,$=o*d*m,L=$>p);const I=document.getElementById("rc-result"),F=T.unit,S=5;let t="";t+='<div class="result-section-title">Hasil Perhitungan</div>',t+='<div class="result-grid">',t+=`  <div class="result-item">
                <span class="result-label">Duit yang siap dirugiin</span>
                <span class="result-value">$${n(p)}</span>
               </div>`,t+=`  <div class="result-item">
                <span class="result-label">Jarak ke stop loss</span>
                <span class="result-value">${n(m)}</span>
                <span class="result-note">${n(M,2)}% dari entry</span>
               </div>`,t+=`  <div class="result-item">
                <span class="result-label">Ukuran posisi (unit)</span>
                <span class="result-value">${n(k,4)} ${F}</span>
               </div>`,t+=`  <div class="result-item">
                <span class="result-label">Ukuran posisi (lot)</span>
                <span class="result-value">${n(b,S)} lot</span>
                <span class="result-note">1 lot = ${n(d,0)} ${F}</span>
               </div>`,t+=`  <div class="result-item">
                <span class="result-label">Nilai nominal posisi</span>
                <span class="result-value">$${n(z)}</span>
               </div>`,t+="</div>",h!=null&&(t+='<div class="result-divider"></div>',t+='<div class="result-section-title">Risk : Reward</div>',t+='<div class="result-grid">',t+=`  <div class="result-item">
                  <span class="result-label">Risk : Reward</span>
                  <span class="result-value">1 : ${n(h,2)}</span>
                 </div>`,t+=`  <div class="result-item">
                  <span class="result-label">Potensi rugi (estimasi)</span>
                  <span class="result-value negative">$${n(p)}</span>
                 </div>`,t+=`  <div class="result-item">
                  <span class="result-label">Potensi profit (estimasi)</span>
                  <span class="result-value positive">$${n(w)}</span>
                 </div>`,t+="</div>",t+='<p class="result-note" style="margin-top:8px;">Estimasi berdasarkan input. Bukan jaminan profit.</p>'),o>0&&(t+='<div class="broker-check">',t+='  <div class="broker-check-title">Broker Check</div>',t+=`  <div class="broker-row">
                  <span class="broker-row-label">Minimum lot</span>
                  <span class="broker-row-value">${o}</span>
                 </div>`,t+=`  <div class="broker-row">
                  <span class="broker-row-label">Lot step</span>
                  <span class="broker-row-value">${v}</span>
                 </div>`,t+=`  <div class="broker-row">
                  <span class="broker-row-label">Ukuran teoritis</span>
                  <span class="broker-row-value">${n(b,S)} lot</span>
                 </div>`,E?t+=`  <div class="broker-row">
                    <span class="broker-row-label">Status</span>
                    <span class="broker-row-value warning">⚠️ Di bawah minimum broker</span>
                   </div>`:t+=`  <div class="broker-row">
                    <span class="broker-row-label">Status</span>
                    <span class="broker-row-value positive">✓ Valid</span>
                   </div>`,t+="</div>"),E&&(t+='<div class="result-warning">',t+=`  <strong>⚠️ Perhatian:</strong> Ukuran teoritis <strong>${n(b,S)} lot</strong> di bawah minimum broker <strong>${o} lot</strong>.`,t+="  <ul>",t+=`    <li>Target risiko: <strong>$${n(p)}</strong></li>`,t+=`    <li>Risiko pada ${o} lot: <strong>$${n($)}</strong></li>`,L&&(t+='    <li>Status: <strong style="color: var(--negative);">⚠️ Melebihi batas risiko</strong></li>'),t+="  </ul>",t+=`  <p style="margin-top:8px;">Jangan bulatkan ke bawah. Kalo lu pakai ${o} lot, risiko lu lebih besar dari target. Sesuaikan modal atau perlebar jarak SL.</p>`,t+="</div>"),t+=`<p class="result-note" style="margin-top:16px;">
              Contract size dapat berbeda tergantung broker. Periksa spesifikasi simbol di broker lu.
             </p>`,I.innerHTML=t,I.hidden=!1}function u(s){const e=document.getElementById("rc-result");e.innerHTML=`<div class="result-error">${s}</div>`,e.hidden=!1}document.getElementById("rc-instrument").addEventListener("change",s=>{const e=B[s.target.value];e&&(document.getElementById("rc-contract").value=e.contractSize,document.getElementById("rc-min-lot").value=e.minimumLot,document.getElementById("rc-lot-step").value=e.lotStep)});const R=document.getElementById("rc-toggle-advanced"),U=document.getElementById("rc-advanced");R.addEventListener("click",()=>{const s=U.hidden;U.hidden=!s,R.textContent=s?"▲ Sembunyikan advanced":"▼ Advanced"});function x(){const s=parseFloat(document.getElementById("pl-entry").value),e=parseFloat(document.getElementById("pl-exit").value),a=parseFloat(document.getElementById("pl-size").value),l=document.getElementById("pl-side").value;if([s,e,a].some(i=>!isFinite(i)||i<=0))return y("pl-result",'<span class="warning">Isi semua kolom dengan angka yang bener ya.</span>');const r=l==="long"?e-s:s-e,c=r*a,d=r/s*100,o=c>=0?"positive":"negative",v=c>=0?"+":"",g=c>=0?"Untung":"Rugi";y("pl-result",`
      <div><strong>Arah:</strong> ${l==="long"?"Beli (long)":"Jual (short)"}</div>
      <div><strong>Selisih harga:</strong> ${n(r)}</div>
      <div class="${o}"><strong>${g}:</strong> ${v}$${n(c)} (${v}${n(d)}%)</div>
    `)}function C(){const s=parseFloat(document.getElementById("cc-amount").value),e=parseFloat(document.getElementById("cc-price").value),a=parseFloat(document.getElementById("cc-rate").value);if([s,e,a].some(c=>!isFinite(c)||c<=0))return y("cc-result",'<span class="warning">Isi semua kolom dengan angka yang bener ya.</span>');const l=s*e,r=l*a;y("cc-result",`
      <div><strong>Dalam USD:</strong> $${n(l)}</div>
      <div><strong>Dalam Rupiah:</strong> Rp ${n(r,0)}</div>
    `)}function y(s,e){const a=document.getElementById(s);a&&(a.innerHTML=e,a.hidden=!1)}const P={risk:D,pl:x,crypto:C};document.querySelectorAll("[data-calc]").forEach(s=>{s.addEventListener("click",()=>{const e=s.dataset.calc;e&&P[e]&&P[e]()})});
