import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                                  */
export { renderers } from '../../renderers.mjs';

const $$BelajarCandlestick = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Belajar Candlestick untuk Pemula \u2014 Akim", "data-astro-cid-6uxv7l3u": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-6uxv7l3u> <article class="post" data-astro-cid-6uxv7l3u> <a href="/blog" class="back-link" data-astro-cid-6uxv7l3u>← Blog</a> <header class="post-header" data-astro-cid-6uxv7l3u> <div class="post-meta" data-astro-cid-6uxv7l3u> <span class="post-tag" data-astro-cid-6uxv7l3u>Trading</span> <span class="post-dot" data-astro-cid-6uxv7l3u>·</span> <span data-astro-cid-6uxv7l3u>1 Feb 2026</span> <span class="post-dot" data-astro-cid-6uxv7l3u>·</span> <span data-astro-cid-6uxv7l3u>6 menit baca</span> </div> <h1 data-astro-cid-6uxv7l3u>Belajar Candlestick untuk Pemula</h1> <p class="post-lead" data-astro-cid-6uxv7l3u>
Pola candlestick paling penting yang harus dikuasai setiap trader.
</p> </header> <div class="post-body" data-astro-cid-6uxv7l3u> <p data-astro-cid-6uxv7l3u>
Candlestick adalah cara visualisasi pergerakan harga di chart trading.
          Setiap candle nunjukin 4 data: Open, High, Low, Close (OHLC) dalam
          periode waktu tertentu.
</p> <h2 data-astro-cid-6uxv7l3u>Anatomi Candlestick</h2> <p data-astro-cid-6uxv7l3u>
Setiap candle punya <strong data-astro-cid-6uxv7l3u>body</strong> (kotak di tengah) dan
<strong data-astro-cid-6uxv7l3u>wick</strong> (garis tipis di atas & bawah). Body nunjukin
          selisih open dan close. Wick nunjukin high dan low.
</p> <h2 data-astro-cid-6uxv7l3u>Pola Penting</h2> <h3 data-astro-cid-6uxv7l3u>Doji</h3> <p data-astro-cid-6uxv7l3u>
Body sangat kecil, hampir kayak garis. Menandakan keraguan pasar,
          sering muncul di titik reversal.
</p> <h3 data-astro-cid-6uxv7l3u>Hammer</h3> <p data-astro-cid-6uxv7l3u>
Body kecil di atas, wick bawah panjang. Sinyal bullish reversal.
          Muncul setelah downtrend.
</p> <h3 data-astro-cid-6uxv7l3u>Shooting Star</h3> <p data-astro-cid-6uxv7l3u>
Body kecil di bawah, wick atas panjang. Sinyal bearish reversal.
          Muncul setelah uptrend.
</p> <h3 data-astro-cid-6uxv7l3u>Engulfing</h3> <p data-astro-cid-6uxv7l3u>
Candle yang body-nya "menelan" candle sebelumnya. Bullish engulfing
          = sinyal naik. Bearish engulfing = sinyal turun.
</p> <h2 data-astro-cid-6uxv7l3u>Tips</h2> <ul data-astro-cid-6uxv7l3u> <li data-astro-cid-6uxv7l3u>Jangan pakai candlestick tanpa konteks tren</li> <li data-astro-cid-6uxv7l3u>Gabungkan dengan support & resistance</li> <li data-astro-cid-6uxv7l3u>Konfirmasi dengan volume</li> <li data-astro-cid-6uxv7l3u>Latihan di akun demo dulu</li> </ul> </div> </article> </div> ` })} `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/posts/belajar-candlestick.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/posts/belajar-candlestick.astro";
const $$url = "/posts/belajar-candlestick";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BelajarCandlestick,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
