import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BBTrY9Ww.mjs';
import { manifest } from './manifest_rY-Z99bw.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/certificates/create.astro.mjs');
const _page3 = () => import('./pages/admin/certificates/detail.astro.mjs');
const _page4 = () => import('./pages/admin/certificates.astro.mjs');
const _page5 = () => import('./pages/admin/login.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/certificate/verify.astro.mjs');
const _page9 = () => import('./pages/certificate.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/portfolio.astro.mjs');
const _page12 = () => import('./pages/posts/analisis-bitcoin-q1-2026.astro.mjs');
const _page13 = () => import('./pages/posts/belajar-candlestick.astro.mjs');
const _page14 = () => import('./pages/posts/cara-pakai-metamask.astro.mjs');
const _page15 = () => import('./pages/tools.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/certificates/create.astro", _page2],
    ["src/pages/admin/certificates/detail.astro", _page3],
    ["src/pages/admin/certificates/index.astro", _page4],
    ["src/pages/admin/login.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/blog.astro", _page7],
    ["src/pages/certificate/verify.astro", _page8],
    ["src/pages/certificate/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/portfolio.astro", _page11],
    ["src/pages/posts/analisis-bitcoin-q1-2026.astro", _page12],
    ["src/pages/posts/belajar-candlestick.astro", _page13],
    ["src/pages/posts/cara-pakai-metamask.astro", _page14],
    ["src/pages/tools.astro", _page15],
    ["src/pages/index.astro", _page16]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "4e4dfc40-d38e-400a-b771-59554a9b5b64",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
