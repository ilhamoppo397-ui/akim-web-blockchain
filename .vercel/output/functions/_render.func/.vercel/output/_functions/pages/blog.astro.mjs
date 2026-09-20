import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C8IUE1lY.mjs';
import { a as articles } from '../chunks/articles_Dcuu7LVy.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const categories = ["All", "Crypto", "Web3", "Trading", "Informatika"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog \u2014 Akim", "description": "Catatan, eksperimen, dan opini soal crypto, Web3, coding, dan trading.", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-ijnerlr2> <header class="page-header" data-astro-cid-ijnerlr2> <p class="page-label" data-astro-cid-ijnerlr2>Blog</p> <h1 data-astro-cid-ijnerlr2>Catatan gue</h1> <p class="page-lead" data-astro-cid-ijnerlr2>
Tempat gue nyimpen hal-hal yang lagi gue pelajarin. Kadang rapi, kadang
        cuma catatan singkat. Semua soal coding, crypto, Web3, dan trading.
</p> </header> <nav class="filters" aria-label="Filter kategori" data-astro-cid-ijnerlr2> ${categories.map((cat, i) => renderTemplate`<button${addAttribute(`filter${i === 0 ? " active" : ""}`, "class")}${addAttribute(cat, "data-category")} type="button" data-astro-cid-ijnerlr2> ${cat} </button>`)} </nav> <div class="post-list" id="post-list" data-astro-cid-ijnerlr2> ${articles.map((post) => renderTemplate`<a${addAttribute(`/posts/${post.slug}`, "href")} class="post-row"${addAttribute(post.category, "data-category")} data-astro-cid-ijnerlr2> <div class="post-meta" data-astro-cid-ijnerlr2> <span class="post-date" data-astro-cid-ijnerlr2>${post.dateLabel}</span> <span class="post-dot" data-astro-cid-ijnerlr2>·</span> <span class="post-tag" data-astro-cid-ijnerlr2>${post.category}</span> <span class="post-dot" data-astro-cid-ijnerlr2>·</span> <span class="post-read" data-astro-cid-ijnerlr2>${post.readTime}</span> </div> <h2 class="post-title" data-astro-cid-ijnerlr2>${post.title}</h2> <p class="post-desc" data-astro-cid-ijnerlr2>${post.description}</p> </a>`)} </div> <p class="empty-state" id="empty-state" hidden data-astro-cid-ijnerlr2>
Belum ada catatan di kategori ini. Nanti gue tulis. 😅
</p> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/blog.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
