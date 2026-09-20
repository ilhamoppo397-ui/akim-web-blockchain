import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, p as profile } from '../chunks/BaseLayout_C8IUE1lY.mjs';
import { a as articles } from '../chunks/articles_Dcuu7LVy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const learning = [
  { name: "Web Development", note: "HTML, CSS, JavaScript, Astro" },
  { name: "Blockchain", note: "Dasar-dasar Bitcoin & Ethereum" },
  { name: "Web3", note: "Wallet, smart contract, dApp" },
  { name: "Python", note: "Untuk data analysis & automation" },
  { name: "Trading", note: "Technical analysis & market structure" }
];

const workingOn = [
  {
    title: "Mengembangkan akim.web.id",
    status: "In Progress",
    note: "Website pribadi ini. Belajar sambil bangun."
  },
  {
    title: "Eksperimen bot trading sederhana",
    status: "In Progress",
    note: "Pakai Python + Binance API. Masih eksperimen."
  },
  {
    title: "Belajar blockchain",
    status: "Learning",
    note: "Baca whitepaper Bitcoin, coba testnet Ethereum."
  },
  {
    title: "Project kuliah Informatika",
    status: "In Progress",
    note: "Tugas algoritma, struktur data, basis data."
  }
];

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Akim \u2014 Informatics Student, Crypto & Web3", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> <!-- MARKET TICKER --> <div class="ticker" id="ticker" data-astro-cid-j7pv25f6> <div class="ticker-label" data-astro-cid-j7pv25f6>MARKET</div> <div class="ticker-items" data-astro-cid-j7pv25f6> <div class="ticker-item" data-market-item data-astro-cid-j7pv25f6> <span class="ticker-symbol" data-astro-cid-j7pv25f6>BTC/USD</span> <span class="ticker-skeleton" data-skeleton data-astro-cid-j7pv25f6></span> <span class="ticker-price" id="btc-price" hidden data-astro-cid-j7pv25f6>—</span> <span class="ticker-change" id="btc-change" data-astro-cid-j7pv25f6></span> </div> <div class="ticker-item" data-market-item data-astro-cid-j7pv25f6> <span class="ticker-symbol" data-astro-cid-j7pv25f6>ETH/USD</span> <span class="ticker-skeleton" data-skeleton data-astro-cid-j7pv25f6></span> <span class="ticker-price" id="eth-price" hidden data-astro-cid-j7pv25f6>—</span> <span class="ticker-change" id="eth-change" data-astro-cid-j7pv25f6></span> </div> <div class="ticker-item" data-market-item data-astro-cid-j7pv25f6> <span class="ticker-symbol" data-astro-cid-j7pv25f6>SOL/USD</span> <span class="ticker-skeleton" data-skeleton data-astro-cid-j7pv25f6></span> <span class="ticker-price" id="sol-price" hidden data-astro-cid-j7pv25f6>—</span> <span class="ticker-change" id="sol-change" data-astro-cid-j7pv25f6></span> </div> <div class="ticker-item" data-market-item data-astro-cid-j7pv25f6> <span class="ticker-symbol" data-astro-cid-j7pv25f6>BNB/USD</span> <span class="ticker-skeleton" data-skeleton data-astro-cid-j7pv25f6></span> <span class="ticker-price" id="bnb-price" hidden data-astro-cid-j7pv25f6>—</span> <span class="ticker-change" id="bnb-change" data-astro-cid-j7pv25f6></span> </div> </div> <div class="ticker-updated" id="ticker-updated" data-astro-cid-j7pv25f6></div> </div> <!-- HERO --> <section class="hero reveal" data-astro-cid-j7pv25f6> <div class="hero-text" data-astro-cid-j7pv25f6> <p class="hero-label" data-astro-cid-j7pv25f6>Personal Website</p> <h1 data-astro-cid-j7pv25f6>Kenalin, gue ${profile.name}. 👋</h1> <p class="hero-tagline" data-astro-cid-j7pv25f6> ${profile.tagline} </p> <p class="hero-desc" data-astro-cid-j7pv25f6>
Di sini gue nulis catatan belajar, eksperimen kecil, dan opini soal
          programming, crypto, blockchain, Web3, dan trading. Sesekali catatan
          kuliah Informatika.
</p> <div class="hero-cta" data-astro-cid-j7pv25f6> <a href="/blog" class="btn" data-astro-cid-j7pv25f6>Baca Catatan →</a> <a href="/portfolio" class="btn-secondary" data-astro-cid-j7pv25f6>Lihat Project</a> </div> </div> <aside class="hero-visual" aria-hidden="true" data-astro-cid-j7pv25f6> <div class="visual-card terminal-card" data-astro-cid-j7pv25f6> <div class="terminal-bar" data-astro-cid-j7pv25f6> <span class="dot dot-red" data-astro-cid-j7pv25f6></span> <span class="dot dot-yellow" data-astro-cid-j7pv25f6></span> <span class="dot dot-green" data-astro-cid-j7pv25f6></span> <span class="terminal-title" data-astro-cid-j7pv25f6>akim@web:~</span> </div> <div class="terminal-body" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6><span class="prompt" data-astro-cid-j7pv25f6>$</span> whoami</div> <div class="output" data-astro-cid-j7pv25f6>akim — informatics student</div> <div data-astro-cid-j7pv25f6><span class="prompt" data-astro-cid-j7pv25f6>$</span> cat interests.txt</div> <div class="output" data-astro-cid-j7pv25f6>code, crypto, web3, trading</div> <div data-astro-cid-j7pv25f6><span class="prompt" data-astro-cid-j7pv25f6>$</span> status</div> <div class="output" data-astro-cid-j7pv25f6>learning... <span class="cursor" data-astro-cid-j7pv25f6>_</span></div> </div> </div> <div class="visual-card market-card" data-astro-cid-j7pv25f6> <div class="market-head" data-astro-cid-j7pv25f6> <span class="market-label" data-astro-cid-j7pv25f6>MARKET</span> <span class="market-status" data-astro-cid-j7pv25f6>Live</span> </div> <div class="market-row" data-astro-cid-j7pv25f6> <span class="market-symbol" data-astro-cid-j7pv25f6>BTC/USD</span> <span class="market-price" id="hero-btc-price" data-astro-cid-j7pv25f6>—</span> <span class="market-change" id="hero-btc-change" data-astro-cid-j7pv25f6></span> </div> <div class="market-row" data-astro-cid-j7pv25f6> <span class="market-symbol" data-astro-cid-j7pv25f6>ETH/USD</span> <span class="market-price" id="hero-eth-price" data-astro-cid-j7pv25f6>—</span> <span class="market-change" id="hero-eth-change" data-astro-cid-j7pv25f6></span> </div> <div class="market-chart" data-astro-cid-j7pv25f6> <svg viewBox="0 0 200 40" preserveAspectRatio="none" data-astro-cid-j7pv25f6> <polyline points="0,30 20,28 40,25 60,27 80,22 100,24 120,18 140,20 160,15 180,17 200,12" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" data-astro-cid-j7pv25f6></polyline> </svg> </div> </div> </aside> </section> <!-- CURRENTLY LEARNING (numbered editorial) --> <section class="section reveal" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Currently Learning</h2> <p class="section-sub" data-astro-cid-j7pv25f6>Yang lagi gue pelajarin</p> </div> <ul class="numbered-list" data-astro-cid-j7pv25f6> ${learning.map((item, i) => renderTemplate`<li class="numbered-item" data-astro-cid-j7pv25f6> <div class="num" data-astro-cid-j7pv25f6>${String(i + 1).padStart(2, "0")}</div> <div class="num-body" data-astro-cid-j7pv25f6> <span class="num-title" data-astro-cid-j7pv25f6>${item.name}</span> <span class="num-note" data-astro-cid-j7pv25f6>${item.note}</span> </div> </li>`)} </ul> </section> <!-- CURRENTLY WORKING ON (numbered editorial) --> <section class="section reveal" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Yang lagi gue kerjain</h2> <p class="section-sub" data-astro-cid-j7pv25f6>Project dan aktivitas saat ini</p> </div> <ul class="numbered-list" data-astro-cid-j7pv25f6> ${workingOn.map((item, i) => renderTemplate`<li class="numbered-item" data-astro-cid-j7pv25f6> <div class="num" data-astro-cid-j7pv25f6>${String(i + 1).padStart(2, "0")}</div> <div class="num-body" data-astro-cid-j7pv25f6> <div class="num-head" data-astro-cid-j7pv25f6> <span class="num-title" data-astro-cid-j7pv25f6>${item.title}</span> <span${addAttribute(`status status-${item.status.toLowerCase().replace(" ", "-")}`, "class")} data-astro-cid-j7pv25f6> ${item.status} </span> </div> <span class="num-note" data-astro-cid-j7pv25f6>${item.note}</span> </div> </li>`)} </ul> </section> <!-- LATEST NOTES (numbered editorial) --> <section class="section reveal" data-astro-cid-j7pv25f6> <div class="section-head-row" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Catatan terbaru</h2> <p class="section-sub" data-astro-cid-j7pv25f6>Yang lagi gue tulis dan pelajarin</p> </div> <a href="/blog" class="section-link" data-astro-cid-j7pv25f6>Lihat semua →</a> </div> <div class="notes-list" data-astro-cid-j7pv25f6> ${articles.slice(0, 3).map((post, i) => renderTemplate`<a${addAttribute(`/posts/${post.slug}`, "href")} class="note-row" data-astro-cid-j7pv25f6> <div class="note-number" data-astro-cid-j7pv25f6>${String(i + 1).padStart(2, "0")}</div> <div class="note-body" data-astro-cid-j7pv25f6> <div class="note-category" data-astro-cid-j7pv25f6>${post.category}</div> <h3 class="note-title" data-astro-cid-j7pv25f6>${post.title}</h3> <p class="note-desc" data-astro-cid-j7pv25f6>${post.description}</p> <div class="note-meta" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>${post.dateLabel}</span> <span class="note-dot" data-astro-cid-j7pv25f6>·</span> <span data-astro-cid-j7pv25f6>${post.readTime}</span> </div> </div> </a>`)} </div> </section> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/index.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
