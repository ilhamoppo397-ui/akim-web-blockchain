import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Admin Dashboard \u2014 Akim Certificate", "description": "Admin panel untuk digital certificate blockchain.", "data-astro-cid-u2h3djql": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-wrap" data-astro-cid-u2h3djql> <div class="container" data-astro-cid-u2h3djql> <header class="dash-header" data-astro-cid-u2h3djql> <div data-astro-cid-u2h3djql> <p class="dash-label" data-astro-cid-u2h3djql>Dashboard</p> <h1 data-astro-cid-u2h3djql>Certificate Dashboard</h1> <p class="dash-sub" data-astro-cid-u2h3djql>Manage digital certificates and blockchain verification.</p> </div> <button class="btn-secondary" id="logout-btn" data-astro-cid-u2h3djql>Disconnect</button> </header> <section class="blockchain-status" id="blockchain-status" data-astro-cid-u2h3djql> <div class="status-header" data-astro-cid-u2h3djql> <div class="status-dot status-checking" data-astro-cid-u2h3djql></div> <div data-astro-cid-u2h3djql> <strong data-astro-cid-u2h3djql>Checking blockchain status...</strong> </div> </div> </section> <section class="stats-grid" data-astro-cid-u2h3djql> <div class="stat-card" data-astro-cid-u2h3djql> <span class="stat-label" data-astro-cid-u2h3djql>Total Certificates</span> <span class="stat-value" id="stat-total" data-astro-cid-u2h3djql>—</span> </div> <div class="stat-card" data-astro-cid-u2h3djql> <span class="stat-label" data-astro-cid-u2h3djql>Valid Certificates</span> <span class="stat-value positive" id="stat-valid" data-astro-cid-u2h3djql>—</span> </div> <div class="stat-card" data-astro-cid-u2h3djql> <span class="stat-label" data-astro-cid-u2h3djql>Revoked</span> <span class="stat-value negative" id="stat-revoked" data-astro-cid-u2h3djql>—</span> </div> <div class="stat-card" data-astro-cid-u2h3djql> <span class="stat-label" data-astro-cid-u2h3djql>Blockchain Records</span> <span class="stat-value" id="stat-records" data-astro-cid-u2h3djql>—</span> </div> </section> <section class="actions-row" data-astro-cid-u2h3djql> <a href="/admin/certificates/create" class="btn" data-astro-cid-u2h3djql>Create Certificate →</a> <a href="/admin/certificates" class="btn-secondary" data-astro-cid-u2h3djql>View All Certificates</a> </section> <section class="recent-section" data-astro-cid-u2h3djql> <header class="section-head" data-astro-cid-u2h3djql> <h2 data-astro-cid-u2h3djql>Recent Certificates</h2> <a href="/admin/certificates" class="section-link" data-astro-cid-u2h3djql>View all →</a> </header> <div id="recent-certificates" data-astro-cid-u2h3djql> <div class="loading-state" data-astro-cid-u2h3djql> <div class="spinner" data-astro-cid-u2h3djql></div> <p data-astro-cid-u2h3djql>Loading certificates from blockchain...</p> </div> </div> </section> </div> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/index.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
