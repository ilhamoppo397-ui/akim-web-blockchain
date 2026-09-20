import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, s as socials } from '../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contacts = [
    { label: "Email", value: socials.email, href: `mailto:${socials.email}` },
    { label: "Instagram", value: `@${socials.instagram.handle}`, href: socials.instagram.url },
    { label: "Telegram", value: `@${socials.telegram.handle}`, href: socials.telegram.url },
    { label: "GitHub", value: socials.github.username, href: socials.github.url }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Kontak \u2014 Akim", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-uw5kdbxl> <header class="page-header" data-astro-cid-uw5kdbxl> <p class="page-label" data-astro-cid-uw5kdbxl>Kontak</p> <h1 data-astro-cid-uw5kdbxl>Hubungi gue</h1> <p class="page-lead" data-astro-cid-uw5kdbxl>
Kalau mau ngobrol soal project, teknologi, atau sekadar tukar ide, boleh kontak gue.
</p> </header> <ul class="contact-list" data-astro-cid-uw5kdbxl> ${contacts.map((c) => renderTemplate`<li data-astro-cid-uw5kdbxl> <a${addAttribute(c.href, "href")}${addAttribute(c.href.startsWith("mailto") ? void 0 : "_blank", "target")}${addAttribute(c.href.startsWith("mailto") ? void 0 : "noopener", "rel")} data-astro-cid-uw5kdbxl> <span class="contact-label" data-astro-cid-uw5kdbxl>${c.label}</span> <span class="contact-value" data-astro-cid-uw5kdbxl>${c.value}</span> <span class="contact-arrow" data-astro-cid-uw5kdbxl>→</span> </a> </li>`)} </ul> <section class="note" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>
Gue cek email dan DM tiap hari. Kalo urgent, Telegram paling cepet.
</p> </section> </div> ` })} `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/contact.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
