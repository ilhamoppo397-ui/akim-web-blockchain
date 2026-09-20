import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Verify = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Verify Certificate \u2014 Akim", "description": "Verifikasi sertifikat digital berbasis blockchain Sepolia.", "data-astro-cid-rbghfm6y": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-rbghfm6y> <header class="page-header" data-astro-cid-rbghfm6y> <a href="/certificate" class="back-link" data-astro-cid-rbghfm6y>← Certificate</a> <p class="page-label" data-astro-cid-rbghfm6y>Verification</p> <h1 data-astro-cid-rbghfm6y>Certificate Verification</h1> <p class="page-lead" data-astro-cid-rbghfm6y>
Verify the authenticity of a digital certificate recorded on the blockchain.
</p> </header> <div id="verify-result" data-astro-cid-rbghfm6y> <div id="empty-state" data-astro-cid-rbghfm6y> <div class="empty-card" data-astro-cid-rbghfm6y> <h2 data-astro-cid-rbghfm6y>Verify a Certificate</h2> <p data-astro-cid-rbghfm6y>Masukin Certificate ID untuk verifikasi keaslian sertifikat.</p> <form id="verify-form-empty" class="verify-form" data-astro-cid-rbghfm6y> <label data-astro-cid-rbghfm6y> <span data-astro-cid-rbghfm6y>Certificate ID</span> <input type="text" id="certificate-id-empty" placeholder="CERT-2026-001" autocomplete="off" spellcheck="false" required data-astro-cid-rbghfm6y> </label> <button type="submit" class="btn" data-astro-cid-rbghfm6y>Verify Certificate →</button> </form> <p class="hint" data-astro-cid-rbghfm6y>Contoh: <code data-astro-cid-rbghfm6y>CERT-2026-001</code></p> </div> </div> </div> </div> <div class="toast" id="toast" role="status" aria-live="polite" data-astro-cid-rbghfm6y></div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/certificate/verify.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/certificate/verify.astro";
const $$url = "/certificate/verify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Verify,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
