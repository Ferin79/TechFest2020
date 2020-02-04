const cacheName = 'ckptechfest';
const assests = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/index.js',
    '/css/index.css',
    '/images/logo_dark.png',
    '/images/logo.png',
    '/images/sec1.png',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js'
];

self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            cache.addAll(assests)
        })
    );
});


self.addEventListener('activate', () => {

});


self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request)
        .then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});