// Service Worker
const CACHE_NAME = 'class-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/vite.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
