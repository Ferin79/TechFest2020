const cacheName = "CKPTechFestV1";
const files_to_cache = [
    './',
    './index.html',
    './pages/committee.html',
    './pages/department.html',
    './pages/events.html',
    './css/index.css',
    './css/default.css',
    './js/index.js',
    './js/darkmode.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
];

self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(files_to_cache).then(() => self.skipWaiting());
        })
    )
});

self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            )
        })
    );
});

self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request)
        .then((res) => {
            if (res) {
                return res;
            }
            return fetch(evt.request);
        })
    )
});