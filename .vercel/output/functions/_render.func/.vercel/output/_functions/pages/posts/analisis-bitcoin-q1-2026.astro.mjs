import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C8IUE1lY.mjs';
import { a as articles } from '../../chunks/articles_Dcuu7LVy.mjs';
/* empty css                                                       */
export { renderers } from '../../renderers.mjs';

const $$AnalisisBitcoinQ12026 = createComponent(($$result, $$props, $$slots) => {
  const currentSlug = "analisis-bitcoin-q1-2026";
  const related = articles.filter((a) => a.slug !== currentSlug).slice(0, 2);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Analisis Bitcoin Q1 2026 \u2014 Akim", "description": "Prediksi pergerakan BTC berdasarkan data on-chain dan analisis teknikal.", "data-astro-cid-tnb6y6pq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-tnb6y6pq> <article class="post" data-astro-cid-tnb6y6pq> <a href="/blog" class="back-link" data-astro-cid-tnb6y6pq>← Blog</a> <header class="post-header" data-astro-cid-tnb6y6pq> <div class="post-meta" data-astro-cid-tnb6y6pq> <span class="post-category" data-astro-cid-tnb6y6pq>Crypto</span> <span class="post-dot" data-astro-cid-tnb6y6pq>·</span> <span data-astro-cid-tnb6y6pq>15 Jan 2026</span> <span class="post-dot" data-astro-cid-tnb6y6pq>·</span> <span data-astro-cid-tnb6y6pq>5 menit baca</span> </div> <h1 data-astro-cid-tnb6y6pq>Analisis Bitcoin Q1 2026</h1> <p class="post-lead" data-astro-cid-tnb6y6pq>
Prediksi pergerakan BTC berdasarkan data on-chain dan analisis teknikal.
</p> </header> <div class="post-body" data-astro-cid-tnb6y6pq> <p data-astro-cid-tnb6y6pq>
Bitcoin memasuki Q1 2026 dengan volatilitas tinggi. Setelah rally
          di akhir 2025 yang membawa BTC ke area all-time high, sekarang pasar
          sedang dalam fase konsolidasi.
</p> <h2 data-astro-cid-tnb6y6pq>Kondisi Teknikal</h2> <p data-astro-cid-tnb6y6pq>
Di timeframe harian, BTC masih bergerak di atas EMA 200, yang
          menandakan tren bullish jangka panjang masih utuh. Support kuat
          berada di area <strong data-astro-cid-tnb6y6pq>$85,000 — $88,000</strong>. Resistance terdekat
          di <strong data-astro-cid-tnb6y6pq>$95,000</strong>.
</p> <h2 data-astro-cid-tnb6y6pq>Data On-Chain</h2> <p data-astro-cid-tnb6y6pq>
Jumlah BTC yang tersimpan di exchange terus menurun, sementara
          long-term holder terus menambah posisi. Ini sinyal akumulasi.
          Funding rate di futures juga masih netral, belum overheat.
</p> <h2 data-astro-cid-tnb6y6pq>Kesimpulan</h2> <p data-astro-cid-tnb6y6pq>
Selama BTC bertahan di atas <strong data-astro-cid-tnb6y6pq>$85,000</strong>, skenario bullish
          masih valid. Target jangka menengah: <strong data-astro-cid-tnb6y6pq>$100,000 — $110,000</strong>.
          Tapi tetap waspada dengan volatilitas makro dari kebijakan Fed.
</p> <div class="disclaimer" data-astro-cid-tnb6y6pq> <strong data-astro-cid-tnb6y6pq>Disclaimer.</strong> Ini bukan saran investasi. Selalu lakukan riset sendiri.
</div> </div> <section class="related" data-astro-cid-tnb6y6pq> <h2 data-astro-cid-tnb6y6pq>Catatan lain</h2> <div class="related-list" data-astro-cid-tnb6y6pq> ${related.map((post) => renderTemplate`<a${addAttribute(`/posts/${post.slug}`, "href")} class="related-item" data-astro-cid-tnb6y6pq> <span class="related-category" data-astro-cid-tnb6y6pq>${post.category}</span> <h3 data-astro-cid-tnb6y6pq>${post.title}</h3> <p data-astro-cid-tnb6y6pq>${post.description}</p> </a>`)} </div> </section> </article> </div> ` })} `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/posts/analisis-bitcoin-q1-2026.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/posts/analisis-bitcoin-q1-2026.astro";
const $$url = "/posts/analisis-bitcoin-q1-2026";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AnalisisBitcoinQ12026,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
