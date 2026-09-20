import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, p as profile, s as socials } from '../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About \u2014 Akim", "description": "Kenalin, gue Akim. Mahasiswa Informatika yang suka ngulik code, crypto, dan Web3.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-kh7btl4r> <!-- HERO --> <header class="hero reveal" data-astro-cid-kh7btl4r> <p class="hero-label" data-astro-cid-kh7btl4r>About Me</p> <h1 data-astro-cid-kh7btl4r>Kenalin, gue <span class="accent" data-astro-cid-kh7btl4r>Akim</span>.</h1> <p class="hero-sub" data-astro-cid-kh7btl4r>
Mahasiswa Informatika yang suka ngulik code, crypto, blockchain, Web3, dan trading.
</p> </header> <!-- INTRO + VISUAL --> <section class="intro reveal" data-astro-cid-kh7btl4r> <div class="intro-text" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Sedikit tentang gue.</h2> <p data-astro-cid-kh7btl4r>
Gue Akim, mahasiswa Informatika yang masih terus belajar dan suka bikin
          berbagai project karena penasaran gimana sesuatu bekerja.
</p> <p data-astro-cid-kh7btl4r>
Dari coding, blockchain, sampai trading, gue lebih suka belajar langsung
          dengan mencoba dan membangun sesuatu.
</p> </div> <aside class="intro-visual" aria-hidden="true" data-astro-cid-kh7btl4r> <div class="terminal" data-astro-cid-kh7btl4r> <div class="terminal-bar" data-astro-cid-kh7btl4r> <span class="dot dot-red" data-astro-cid-kh7btl4r></span> <span class="dot dot-yellow" data-astro-cid-kh7btl4r></span> <span class="dot dot-green" data-astro-cid-kh7btl4r></span> <span class="terminal-title" data-astro-cid-kh7btl4r>akim@web:~</span> </div> <div class="terminal-body" data-astro-cid-kh7btl4r> <div data-astro-cid-kh7btl4r><span class="prompt" data-astro-cid-kh7btl4r>$</span> whoami</div> <div class="output" data-astro-cid-kh7btl4r>akim — informatics student</div> <div data-astro-cid-kh7btl4r><span class="prompt" data-astro-cid-kh7btl4r>$</span> cat interests.txt</div> <div class="output" data-astro-cid-kh7btl4r>coding, crypto, blockchain, web3</div> <div data-astro-cid-kh7btl4r><span class="prompt" data-astro-cid-kh7btl4r>$</span> uptime</div> <div class="output" data-astro-cid-kh7btl4r>learning since 2020</div> <div data-astro-cid-kh7btl4r><span class="prompt" data-astro-cid-kh7btl4r>$</span> <span class="cursor" data-astro-cid-kh7btl4r>_</span></div> </div> </div> </aside> </section> <!-- KENAPA SUKA NGULIK --> <section class="why reveal" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Kenapa gue suka ngulik?</h2> <p data-astro-cid-kh7btl4r>
Kadang gue bikin sesuatu bukan karena ada tugas atau kebutuhan tertentu,
        tapi cuma karena penasaran: <em data-astro-cid-kh7btl4r>sebenarnya cara kerjanya gimana?</em> </p> <p data-astro-cid-kh7btl4r>
Rasa penasaran itu yang akhirnya membawa gue dari coding ke berbagai hal
        seperti blockchain, Web3, crypto, dan trading. Kadang berhasil, kadang
        stuck berjam-jam. Tapi ya, itu bagian dari belajarnya. 😅
</p> </section> <!-- TIMELINE --> <section class="timeline-section reveal" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Perjalanan singkat</h2> <ol class="timeline" data-astro-cid-kh7btl4r> <li class="timeline-item" data-astro-cid-kh7btl4r> <div class="timeline-year" data-astro-cid-kh7btl4r>2020</div> <div class="timeline-content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Mulai tertarik dan belajar tentang crypto.</p> </div> </li> <li class="timeline-item timeline-item-now" data-astro-cid-kh7btl4r> <div class="timeline-year" data-astro-cid-kh7btl4r>Sekarang</div> <div class="timeline-content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Terus belajar Informatika, programming, blockchain, Web3, dan trading.</p> </div> </li> </ol> </section> <!-- INTERESTS --> <section class="interests reveal" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Yang lagi gue pelajari</h2> <ul class="tags" data-astro-cid-kh7btl4r> ${profile.interests.map((interest) => renderTemplate`<li class="tag" data-astro-cid-kh7btl4r>${interest}</li>`)} </ul> </section> <!-- EDUCATION --> <section class="education reveal" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Education</h2> <div class="edu-card" data-astro-cid-kh7btl4r> <p class="edu-role" data-astro-cid-kh7btl4r>${profile.education}</p> <p class="edu-note" data-astro-cid-kh7btl4r>Masih belajar. Masih banyak yang belum tahu.</p> </div> </section> <!-- CONTACT --> <section class="contact reveal" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Kontak</h2> <p class="contact-intro" data-astro-cid-kh7btl4r>
Kalau mau ngobrol soal project, teknologi, atau sekadar tukar ide,
        boleh kontak gue di salah satu ini:
</p> <ul class="contact-list" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r> <span class="contact-label" data-astro-cid-kh7btl4r>Email</span> <a${addAttribute(`mailto:${socials.email}`, "href")} data-astro-cid-kh7btl4r>${socials.email}</a> </li> <li data-astro-cid-kh7btl4r> <span class="contact-label" data-astro-cid-kh7btl4r>Instagram</span> <a${addAttribute(socials.instagram.url, "href")} target="_blank" rel="noopener" data-astro-cid-kh7btl4r>@${socials.instagram.handle}</a> </li> <li data-astro-cid-kh7btl4r> <span class="contact-label" data-astro-cid-kh7btl4r>Telegram</span> <a${addAttribute(socials.telegram.url, "href")} target="_blank" rel="noopener" data-astro-cid-kh7btl4r>@${socials.telegram.handle}</a> </li> <li data-astro-cid-kh7btl4r> <span class="contact-label" data-astro-cid-kh7btl4r>GitHub</span> <a${addAttribute(socials.github.url, "href")} target="_blank" rel="noopener" data-astro-cid-kh7btl4r>${socials.github.username}</a> </li> </ul> </section> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/about.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
