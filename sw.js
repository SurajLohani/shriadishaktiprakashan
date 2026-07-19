/* Shri Adishakti Prakashan — service worker (v1) */
const CACHE_NAME = 'sap-cache-v1';
const OFFLINE_URL = '/offline.html';
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/assets/img/favicon-192.png'
];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(PRECACHE_ASSETS); })
      .catch(function () {})
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys.filter(function (k) { return k !== CACHE_NAME; })
              .map(function (k) { return caches.delete(k); })
        );
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Page navigations: always try the network first so content stays fresh;
  // fall back to the offline page only when there is truly no connection.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(function () {
        return caches.match(OFFLINE_URL);
      })
    );
    return;
  }

  // Static assets (css/js/images/fonts): serve from cache first, refresh in background.
  if (/\.(css|js|png|jpg|jpeg|svg|webp|woff2?|ico)$/.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then(function (cached) {
        var networkFetch = fetch(req).then(function (res) {
          if (res && res.ok) {
            var resClone = res.clone();
            caches.open(CACHE_NAME).then(function (cache) { cache.put(req, resClone); });
          }
          return res;
        }).catch(function () { return cached; });
        return cached || networkFetch;
      })
    );
  }
});
