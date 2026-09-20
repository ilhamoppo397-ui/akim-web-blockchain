import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Create Certificate \u2014 Akim Certificate", "description": "Issue certificate baru di Sepolia blockchain.", "data-astro-cid-ik5z5r5t": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="create-wrap" data-astro-cid-ik5z5r5t> <div class="container" data-astro-cid-ik5z5r5t> <header class="page-head" data-astro-cid-ik5z5r5t> <div data-astro-cid-ik5z5r5t> <a href="/admin" class="back-link" data-astro-cid-ik5z5r5t>← Dashboard</a> <p class="page-label" data-astro-cid-ik5z5r5t>Admin</p> <h1 data-astro-cid-ik5z5r5t>Create Certificate</h1> <p class="page-sub" data-astro-cid-ik5z5r5t>
Issue a new digital certificate on Sepolia Testnet.
</p> </div> </header> <section class="wallet-status" id="wallet-status" data-astro-cid-ik5z5r5t> <div class="status-dot status-checking" data-astro-cid-ik5z5r5t></div> <div data-astro-cid-ik5z5r5t> <strong data-astro-cid-ik5z5r5t>Checking wallet...</strong> </div> </section> <form class="create-form" id="create-form" data-astro-cid-ik5z5r5t> <div class="form-grid" data-astro-cid-ik5z5r5t> <label data-astro-cid-ik5z5r5t> <span data-astro-cid-ik5z5r5t>Certificate ID</span> <input type="text" id="cert-id" placeholder="CERT-2026-XXX" autocomplete="off" spellcheck="false" required data-astro-cid-ik5z5r5t> <small data-astro-cid-ik5z5r5t>ID unik. Ga bisa dipakai 2 kali.</small> </label> <label data-astro-cid-ik5z5r5t> <span data-astro-cid-ik5z5r5t>Recipient Name</span> <input type="text" id="recipient" placeholder="Nama penerima" required data-astro-cid-ik5z5r5t> </label> <label data-astro-cid-ik5z5r5t> <span data-astro-cid-ik5z5r5t>Certificate Type</span> <input type="text" id="cert-type" placeholder="Blockchain Fundamentals" required data-astro-cid-ik5z5r5t> </label> <label data-astro-cid-ik5z5r5t> <span data-astro-cid-ik5z5r5t>Issuer</span> <input type="text" id="issuer" value="Akim" required data-astro-cid-ik5z5r5t> </label> </div> <div class="form-actions" data-astro-cid-ik5z5r5t> <button type="submit" class="btn" id="submit-btn" data-astro-cid-ik5z5r5t>
Issue Certificate →
</button> </div> </form> <div id="result-slot" data-astro-cid-ik5z5r5t></div> </div> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/certificates/create.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/certificates/create.astro";
const $$url = "/admin/certificates/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Create,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
