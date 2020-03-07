const cacheName = "CKPTechFestV1";
const files_to_cache = [
  "./",
  "./index.html",
  "./pages/committee.html",
  "./pages/departments.html",
  "./css/index.css",
  "./css/default.css",
  "./css/testimonial.css",
  "./js/index.js",
  "./js/darkmode.js",
  "./images/logo_dark.png",
  "./images/index_logo.png",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
  "https://code.jquery.com/jquery-3.4.1.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
  "https://unpkg.com/aos@2.3.1/dist/aos.css",
  "https://fonts.googleapis.com/icon?family=Material+Icons"
];

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(files_to_cache).then();
    })
  );
});

self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => {
      if (res) {
        return res;
      }
      return fetch(evt.request);
    })
  );
});
