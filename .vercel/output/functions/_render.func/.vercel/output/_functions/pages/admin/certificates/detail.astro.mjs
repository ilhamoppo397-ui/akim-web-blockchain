import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Detail = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Certificate Detail \u2014 Akim Certificate", "description": "Detail certificate dari Sepolia blockchain.", "data-astro-cid-e5fmw57x": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="detail-wrap" data-astro-cid-e5fmw57x> <div class="container" data-astro-cid-e5fmw57x> <header class="page-head" data-astro-cid-e5fmw57x> <a href="/admin/certificates" class="back-link" data-astro-cid-e5fmw57x>← All Certificates</a> <p class="page-label" data-astro-cid-e5fmw57x>Certificate Detail</p> <h1 id="cert-title" data-astro-cid-e5fmw57x>Loading...</h1> <div id="cert-status-badge" data-astro-cid-e5fmw57x></div> </header> <div id="detail-content" data-astro-cid-e5fmw57x> <div class="loading-state" data-astro-cid-e5fmw57x> <div class="spinner" data-astro-cid-e5fmw57x></div> <p data-astro-cid-e5fmw57x>Reading certificate from Sepolia...</p> </div> </div> </div> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/certificates/detail.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/certificates/detail.astro";
const $$url = "/admin/certificates/detail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Detail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
