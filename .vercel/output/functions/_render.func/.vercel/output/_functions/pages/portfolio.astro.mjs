import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const projects = [
  {
    name: "akim.web.id",
    category: "Personal Website",
    status: "Live",
    description: "Website pribadi yang sedang lu lihat ini. Dibuat dengan Astro v4, HTML, dan CSS murni. Deploy di Vercel.",
    tech: ["Astro", "HTML/CSS", "Vercel"],
    why: "Belajar web development sambil punya tempat nulis.",
    learned: ["Astro", "Git & GitHub", "Deploy & domain"],
    github: "https://github.com/ilhamoppo397-ui/akim-web",
    demo: "https://akim.web.id"
  },
  {
    name: "Bot Trading Sederhana",
    category: "Trading Experiment",
    status: "In Progress",
    description: "Eksperimen pribadi untuk belajar menggunakan API market dan automation.",
    tech: ["Python", "Binance API", "Telegram Bot"],
    why: "Belajar REST API dan automation lewat kasus nyata.",
    learned: ["REST API", "Data processing", "Automation", "Python"],
    github: null,
    demo: null
  },
  {
    name: "Catatan Kuliah Informatika",
    category: "College Projects",
    status: "Ongoing",
    description: "Kumpulan catatan algoritma, struktur data, dan basis data yang gue tulis selama kuliah.",
    tech: ["Markdown", "GitHub"],
    why: "Biar catatan ga ilang dan bisa dibaca ulang.",
    learned: ["Markdown", "Dokumentasi", "Consistency"],
    github: "https://github.com/ilhamoppo397-ui",
    demo: null
  }
];

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Portofolio \u2014 Akim", "description": "Project log Akim. Personal website, trading experiment, dan catatan kuliah.", "data-astro-cid-hcjuqwdu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-hcjuqwdu> <header class="page-header" data-astro-cid-hcjuqwdu> <p class="page-label" data-astro-cid-hcjuqwdu>Project Log</p> <h1 data-astro-cid-hcjuqwdu>Yang sedang gue kerjakan</h1> <p class="page-lead" data-astro-cid-hcjuqwdu>
Proyek pribadi, eksperimen, dan catatan yang gue bangun sambil belajar.
</p> </header> <section class="project-list" data-astro-cid-hcjuqwdu> ${projects.map((project, i) => renderTemplate`<article class="project" data-astro-cid-hcjuqwdu> <div class="project-number" data-astro-cid-hcjuqwdu>${String(i + 1).padStart(2, "0")}</div> <div class="project-body" data-astro-cid-hcjuqwdu> <div class="project-head" data-astro-cid-hcjuqwdu> <div class="project-title-block" data-astro-cid-hcjuqwdu> <span class="project-category" data-astro-cid-hcjuqwdu>${project.category}</span> <h2 data-astro-cid-hcjuqwdu>${project.name}</h2> </div> <span${addAttribute(`status status-${project.status.toLowerCase().replace(" ", "-")}`, "class")} data-astro-cid-hcjuqwdu> ${project.status} </span> </div> <p class="project-desc" data-astro-cid-hcjuqwdu>${project.description}</p> <div class="project-meta" data-astro-cid-hcjuqwdu> <div class="meta-block" data-astro-cid-hcjuqwdu> <span class="meta-label" data-astro-cid-hcjuqwdu>Tentang</span> <p class="meta-value" data-astro-cid-hcjuqwdu>${project.why}</p> </div> <div class="meta-block" data-astro-cid-hcjuqwdu> <span class="meta-label" data-astro-cid-hcjuqwdu>Yang gue pelajari</span> <p class="meta-value" data-astro-cid-hcjuqwdu>${project.learned.join(" \xB7 ")}</p> </div> </div> <div class="project-tags" data-astro-cid-hcjuqwdu> ${project.tech.map((t) => renderTemplate`<span class="tag" data-astro-cid-hcjuqwdu>${t}</span>`)} </div> ${(project.github || project.demo) && renderTemplate`<div class="project-links" data-astro-cid-hcjuqwdu> ${project.github && renderTemplate`<a${addAttribute(project.github, "href")} target="_blank" rel="noopener" data-astro-cid-hcjuqwdu>GitHub →</a>`} ${project.demo && renderTemplate`<a${addAttribute(project.demo, "href")} target="_blank" rel="noopener" data-astro-cid-hcjuqwdu>Live Demo →</a>`} </div>`} </div> </article>`)} </section> </div> ` })} `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/portfolio.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
