import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const BLOCKCHAIN_CONFIG = {
  rpcUrl: "https://sepolia.infura.io/v3/69072394901745419e8d58c0999a5539",
  contractAddress: "0xf0BA95d638cfD7b0D64Ca01c1FB8773a531de0D1",
  network: "sepolia",
  chainId: Number("11155111")};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Digital Certificate \u2014 Akim", "description": "Sistem sertifikat digital berbasis blockchain Sepolia testnet.", "data-astro-cid-c6awmzio": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-c6awmzio> <header class="page-header" data-astro-cid-c6awmzio> <p class="page-label" data-astro-cid-c6awmzio>Certificate</p> <h1 data-astro-cid-c6awmzio>Digital Certificate</h1> <p class="page-lead" data-astro-cid-c6awmzio>
Sistem penerbitan dan verifikasi sertifikat digital berbasis blockchain
        dan smart contract.
</p> </header> <section class="intro" data-astro-cid-c6awmzio> <p data-astro-cid-c6awmzio>
Gue bikin sistem ini sambil belajar gimana blockchain bisa dipakai buat
        nyimpen dan verifikasi sertifikat digital. Setiap sertifikat punya ID
        unik yang tercatat di smart contract, dan bisa diverifikasi siapa aja.
</p> <p data-astro-cid-c6awmzio>
Sistem ini jalan di <strong data-astro-cid-c6awmzio>Sepolia Testnet</strong> — jaringan pengujian
        publik Ethereum. Bukan mainnet, tapi data di sini <strong data-astro-cid-c6awmzio>permanen</strong>
dan bisa diliat siapa aja di Etherscan.
</p> </section> <section class="warning-box" data-astro-cid-c6awmzio> <p data-astro-cid-c6awmzio> <strong data-astro-cid-c6awmzio>ℹ️ Testnet Mode.</strong>
Sistem ini berjalan di Sepolia Testnet — jaringan uji publik untuk
        development. Data tersimpan permanen di blockchain Sepolia, tapi ini
<strong data-astro-cid-c6awmzio>bukan mainnet</strong>. Jangan digunakan untuk sertifikat produksi
        tanpa audit.
</p> </section> <section class="actions" data-astro-cid-c6awmzio> <a href="/certificate/verify" class="btn" data-astro-cid-c6awmzio>Verifikasi Sertifikat →</a> </section> <section class="info-grid" data-astro-cid-c6awmzio> <div class="info-block" data-astro-cid-c6awmzio> <span class="info-label" data-astro-cid-c6awmzio>Network</span> <span class="info-value mono" data-astro-cid-c6awmzio>${BLOCKCHAIN_CONFIG.network}</span> </div> <div class="info-block" data-astro-cid-c6awmzio> <span class="info-label" data-astro-cid-c6awmzio>RPC URL</span> <span class="info-value mono" data-astro-cid-c6awmzio>${BLOCKCHAIN_CONFIG.rpcUrl}</span> </div> <div class="info-block" data-astro-cid-c6awmzio> <span class="info-label" data-astro-cid-c6awmzio>Chain ID</span> <span class="info-value mono" data-astro-cid-c6awmzio>${BLOCKCHAIN_CONFIG.chainId}</span> </div> <div class="info-block" data-astro-cid-c6awmzio> <span class="info-label" data-astro-cid-c6awmzio>Contract Address</span> <span class="info-value mono small" data-astro-cid-c6awmzio>${BLOCKCHAIN_CONFIG.contractAddress}</span> </div> </section> <p class="etherscan-link" data-astro-cid-c6awmzio>
Lihat contract di <a${addAttribute(`https://sepolia.etherscan.io/address/${BLOCKCHAIN_CONFIG.contractAddress}`, "href")} target="_blank" rel="noopener" data-astro-cid-c6awmzio>Sepolia Etherscan →</a> </p> <section class="status" id="blockchain-status" data-astro-cid-c6awmzio> <div class="status-dot status-checking" data-astro-cid-c6awmzio></div> <div class="status-text" data-astro-cid-c6awmzio> <strong data-astro-cid-c6awmzio>Cek status blockchain...</strong> </div> </section> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/certificate/index.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/certificate/index.astro";
const $$url = "/certificate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
