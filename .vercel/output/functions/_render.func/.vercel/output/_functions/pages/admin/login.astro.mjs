import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C8IUE1lY.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Admin Login \u2014 Akim Certificate", "description": "Admin panel untuk digital certificate blockchain.", "data-astro-cid-rf56lckb": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="login-wrap" data-astro-cid-rf56lckb> <div class="login-card" data-astro-cid-rf56lckb> <header class="login-header" data-astro-cid-rf56lckb> <div class="brand" data-astro-cid-rf56lckb> <span class="brand-mark" data-astro-cid-rf56lckb>A</span> <span class="brand-name" data-astro-cid-rf56lckb>akim<span class="brand-dot" data-astro-cid-rf56lckb>.</span>web.id</span> </div> <h1 data-astro-cid-rf56lckb>Digital Certificate</h1> <p class="subtitle" data-astro-cid-rf56lckb>
Manage and verify digital certificates on Ethereum Sepolia.
</p> </header> <div id="login-content" data-astro-cid-rf56lckb> <div class="loading-state" data-astro-cid-rf56lckb> <div class="spinner" data-astro-cid-rf56lckb></div> <p data-astro-cid-rf56lckb>Checking MetaMask...</p> </div> </div> <footer class="login-footer" data-astro-cid-rf56lckb> <div class="network-info" data-astro-cid-rf56lckb> <span class="network-dot" data-astro-cid-rf56lckb></span> <span data-astro-cid-rf56lckb>Sepolia Testnet</span> </div> </footer> </div> </div> ` })}  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/login.astro", void 0);

const $$file = "/Users/macos/Downloads/akim-web-blockchain/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
