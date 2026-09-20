import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, f as renderSlot, g as renderHead } from './astro/server_BQ-5Lr2K.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://akim.web.id");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    { href: "https://akim.web.id/", label: "Home" },
    { href: "https://akim.web.id/about", label: "About" },
    { href: "https://akim.web.id/blog", label: "Blog" },
    { href: "https://akim.web.id/portfolio", label: "Portofolio" },
    { href: "https://akim.web.id/tools", label: "Tools" },
    { href: "/certificate", label: "Certificate" },
    { href: "https://akim.web.id/contact", label: "Kontak" }
  ];
  const currentPath = Astro2.url.pathname;
  function isActive(href) {
    if (href.startsWith("http")) return false;
    return currentPath === href || currentPath.startsWith(href + "/");
  }
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container header-inner" data-astro-cid-3ef6ksr2> <a href="https://akim.web.id/" class="logo" data-astro-cid-3ef6ksr2> <span class="logo-mark" data-astro-cid-3ef6ksr2>A</span> <span class="logo-text" data-astro-cid-3ef6ksr2>akim<span class="logo-dot" data-astro-cid-3ef6ksr2>.</span>web.id</span> </a> <nav class="nav-desktop" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${links.map((link) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")}${addAttribute(isActive(link.href) ? "active" : "", "class")} data-astro-cid-3ef6ksr2> ${link.label} </a> </li>`)} </ul> </nav> <div class="header-actions" data-astro-cid-3ef6ksr2> <button class="theme-toggle" aria-label="Ganti tema" data-theme-toggle data-astro-cid-3ef6ksr2> <svg class="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <circle cx="12" cy="12" r="4" data-astro-cid-3ef6ksr2></circle> <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" data-astro-cid-3ef6ksr2></path> </svg> <svg class="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-3ef6ksr2></path> </svg> </button> <button class="menu-toggle" aria-label="Menu" aria-expanded="false" data-menu-toggle data-astro-cid-3ef6ksr2> <span class="menu-icon" data-astro-cid-3ef6ksr2></span> <span class="menu-icon" data-astro-cid-3ef6ksr2></span> <span class="menu-icon" data-astro-cid-3ef6ksr2></span> </button> </div> </div> <nav class="nav-mobile" data-mobile-menu data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${links.map((link) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")}${addAttribute(isActive(link.href) ? "active" : "", "class")} data-astro-cid-3ef6ksr2> ${link.label} </a> </li>`)} </ul> </nav> </header>  `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/components/Header.astro", void 0);

const profile = {
  name: "Akim",
  tagline: "Mahasiswa Informatika yang suka ngulik code, crypto, blockchain, Web3, dan trading.",
  interests: [
    "Programming",
    "Crypto",
    "Blockchain",
    "Web3",
    "Forex",
    "Financial Technology"
  ],
  education: "Mahasiswa Informatika"};

const socials = {
  email: "akimhm06@gmail.com",
  instagram: {
    handle: "akimhm_",
    url: "https://instagram.com/akimhm_"
  },
  telegram: {
    handle: "spederman0",
    url: "https://t.me/spederman0"
  },
  github: {
    username: "ilhamoppo397-ui",
    url: "https://github.com/ilhamoppo397-ui"
  }
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const links = [
    { label: "GitHub", href: socials.github.url },
    { label: "Instagram", href: socials.instagram.url },
    { label: "Telegram", href: socials.telegram.url },
    { label: "Email", href: `mailto:${socials.email}` }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container footer-inner" data-astro-cid-sz7xmlte> <div class="footer-brand" data-astro-cid-sz7xmlte> <p class="footer-name" data-astro-cid-sz7xmlte>${profile.name}</p> <p class="footer-role" data-astro-cid-sz7xmlte>Informatics Student</p> <p class="footer-tagline" data-astro-cid-sz7xmlte>Code · Crypto · Blockchain · Web3</p> </div> <ul class="footer-links" data-astro-cid-sz7xmlte> ${links.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")}${addAttribute(link.href.startsWith("mailto") ? void 0 : "_blank", "target")}${addAttribute(link.href.startsWith("mailto") ? void 0 : "noopener", "rel")} data-astro-cid-sz7xmlte> ${link.label} </a> </li>`)} </ul> </div> <div class="container footer-bottom" data-astro-cid-sz7xmlte> <p class="footer-quote" data-astro-cid-sz7xmlte>
Dibuat sambil belajar dan ngulik hal-hal yang kadang bikin lupa waktu. 😅
</p> <p class="footer-copy" data-astro-cid-sz7xmlte>© ${year} ${profile.name}</p> </div> </footer> `;
}, "/Users/macos/Downloads/akim-web-blockchain/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://akim.web.id");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = `${profile.name} \u2014 Informatics Student, Crypto & Web3`,
    description = "Website pribadi Akim, mahasiswa Informatika yang sedang belajar programming, crypto, blockchain, Web3, dan teknologi.",
    image = "/favicon.svg"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://akim.web.id");
  const ogImage = new URL(image, canonicalURL);
  return renderTemplate(_a || (_a = __template([`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Anti-flash: apply theme SEBELUM render --><script>
    (function () {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') {
        document.documentElement.setAttribute('data-theme', saved);
      }
    })();
  <\/script><!-- Primary Meta Tags --><title>`, '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><link rel="canonical"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="theme-color" content="#0a0b0d"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name"', '><meta property="og:locale" content="id_ID"><!-- Twitter / X --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', ">", "</head> <body> ", " <main> ", " </main> ", " </body></html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(profile.name, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(profile.name, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/macos/Downloads/akim-web-blockchain/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, profile as p, socials as s };
