import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                                  */
export { renderers } from '../../renderers.mjs';

const $$CaraPakaiMetamask = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cara Pakai MetaMask untuk Pemula \u2014 Akim", "data-astro-cid-ww7whvy7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-ww7whvy7> <article class="post" data-astro-cid-ww7whvy7> <a href="/blog" class="back-link" data-astro-cid-ww7whvy7>← Blog</a> <header class="post-header" data-astro-cid-ww7whvy7> <div class="post-meta" data-astro-cid-ww7whvy7> <span class="post-tag" data-astro-cid-ww7whvy7>Web3</span> <span class="post-dot" data-astro-cid-ww7whvy7>·</span> <span data-astro-cid-ww7whvy7>22 Jan 2026</span> <span class="post-dot" data-astro-cid-ww7whvy7>·</span> <span data-astro-cid-ww7whvy7>7 menit baca</span> </div> <h1 data-astro-cid-ww7whvy7>Cara Pakai MetaMask untuk Pemula</h1> <p class="post-lead" data-astro-cid-ww7whvy7>
Panduan lengkap setup wallet MetaMask, dari install sampai transaksi pertama.
</p> </header> <div class="post-body" data-astro-cid-ww7whvy7> <p data-astro-cid-ww7whvy7>
MetaMask adalah wallet crypto paling populer buat akses Web3.
          Wallet ini bisa dipakai di browser (Chrome, Firefox, Brave) dan
          di HP (Android, iOS).
</p> <h2 data-astro-cid-ww7whvy7>1. Install MetaMask</h2> <p data-astro-cid-ww7whvy7>
Download extension MetaMask dari situs resmi
<a href="https://metamask.io" target="_blank" rel="noopener" data-astro-cid-ww7whvy7>metamask.io</a>.
          Jangan download dari sumber lain — banyak phishing yang nyamar
          jadi MetaMask.
</p> <h2 data-astro-cid-ww7whvy7>2. Bikin Wallet Baru</h2> <p data-astro-cid-ww7whvy7>
Setelah install, klik "Create a new wallet". Lu bakal diminta bikin
          password. Password ini cuma buat buka MetaMask di device lu, bukan
          buat recovery.
</p> <h2 data-astro-cid-ww7whvy7>3. Simpan Seed Phrase</h2> <p data-astro-cid-ww7whvy7>
MetaMask bakal kasih 12 kata yang disebut <strong data-astro-cid-ww7whvy7>seed phrase</strong>.
          Ini kunci utama wallet lu. Tulis di kertas, jangan screenshot, jangan
          simpan di cloud. Siapa pun yang punya seed phrase ini bisa ambil
          semua aset lu.
</p> <h2 data-astro-cid-ww7whvy7>4. Deposit Crypto</h2> <p data-astro-cid-ww7whvy7>
Setelah wallet jadi, lu bakal punya address (contoh:
<span class="mono" data-astro-cid-ww7whvy7>0x1234...</span>). Kirim ETH atau token ERC-20
          ke address itu buat mulai transaksi.
</p> <h2 data-astro-cid-ww7whvy7>5. Connect ke dApp</h2> <p data-astro-cid-ww7whvy7>
Buka dApp kayak Uniswap, OpenSea, atau Aave. Klik "Connect Wallet",
          pilih MetaMask, approve. Sekarang lu bisa swap, mint NFT, atau
          stake token.
</p> <h2 data-astro-cid-ww7whvy7>Keamanan</h2> <ul data-astro-cid-ww7whvy7> <li data-astro-cid-ww7whvy7>Jangan pernah share seed phrase ke siapapun</li> <li data-astro-cid-ww7whvy7>Selalu cek URL sebelum connect wallet</li> <li data-astro-cid-ww7whvy7>Pakai hardware wallet buat aset besar</li> </ul> </div> </article> </div> ` })} `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/posts/cara-pakai-metamask.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/posts/cara-pakai-metamask.astro";
const $$url = "/posts/cara-pakai-metamask";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CaraPakaiMetamask,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
