if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),l={module:{uri:t},exports:o,require:d};s[t]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e36c50d5b5e9ed4e94f5ffd0fe95ee63"},{url:"assets/browser-P8nFgWrk.js",revision:null},{url:"assets/index-Bfd_p1z0.js",revision:null},{url:"assets/index-D-Xodb0M.css",revision:null},{url:"index.html",revision:"38a0f0df7c73ef4b0e97979a9efbe2e9"},{url:"manifest.webmanifest",revision:"503f7fe8edb47e77b1c58096cae632c0"},{url:"pwa-192x192.png",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"pwa-512x512.png",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"registerSW.js",revision:"bd57fd9ab175ef520807e29b8979bc2f"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"503f7fe8edb47e77b1c58096cae632c0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
