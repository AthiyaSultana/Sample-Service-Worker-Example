var cacheName = 'weather-service-worker-cache';
var filesToCache = [];
console.log('self', self);
console.log('this', this);
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    )
});