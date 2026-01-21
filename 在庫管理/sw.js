const CACHE="factory-stock-v1";
const FILES=[
  "./",
  "./index.html",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
