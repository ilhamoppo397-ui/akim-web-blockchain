import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "All Certificates \u2014 Akim Certificate", "description": "Manage all digital certificates issued on Sepolia.", "data-astro-cid-2tivy3yd": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="certs-wrap" data-astro-cid-2tivy3yd> <div class="container" data-astro-cid-2tivy3yd> <header class="page-head" data-astro-cid-2tivy3yd> <div data-astro-cid-2tivy3yd> <a href="/admin" class="back-link" data-astro-cid-2tivy3yd>← Dashboard</a> <p class="page-label" data-astro-cid-2tivy3yd>Admin</p> <h1 data-astro-cid-2tivy3yd>All Certificates</h1> <p class="page-sub" data-astro-cid-2tivy3yd>
Manage all digital certificates issued on Sepolia Testnet.
</p> </div> <a href="/admin/certificates/create" class="btn" data-astro-cid-2tivy3yd>Create Certificate →</a> </header> <section class="controls" data-astro-cid-2tivy3yd> <input type="text" id="search-input" class="search-input" placeholder="Search certificate..." autocomplete="off" data-astro-cid-2tivy3yd> <select id="filter-select" class="filter-select" data-astro-cid-2tivy3yd> <option value="all" data-astro-cid-2tivy3yd>All</option> <option value="valid" data-astro-cid-2tivy3yd>Valid</option> <option value="revoked" data-astro-cid-2tivy3yd>Revoked</option> </select> <select id="sort-select" class="filter-select" data-astro-cid-2tivy3yd> <option value="newest" data-astro-cid-2tivy3yd>Newest</option> <option value="oldest" data-astro-cid-2tivy3yd>Oldest</option> </select> </section> <div id="certs-container" data-astro-cid-2tivy3yd> <div class="loading-state" data-astro-cid-2tivy3yd> <div class="spinner" data-astro-cid-2tivy3yd></div> <p data-astro-cid-2tivy3yd>Loading certificates from blockchain...</p> </div> </div> <div class="list-footer" id="list-footer" hidden data-astro-cid-2tivy3yd> <span id="list-count" data-astro-cid-2tivy3yd>—</span> </div> </div> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/certificates/index.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/certificates/index.astro";
const $$url = "/admin/certificates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
