const CACHE_NAME = 'product-app-cache-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './app.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Cache-first for same-origin GET
  if (req.method === 'GET' && url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const fetchPromise = fetch(req).then((resp) => {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, respClone));
          return resp;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // For cross-origin (e.g., Tailwind CDN): stale-while-revalidate
  if (req.method === 'GET') {
    event.respondWith(
      caches.match(req).then((cached) => {
        const fetchPromise = fetch(req).then((resp) => {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, respClone));
          return resp;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
  }
});

