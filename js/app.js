if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js')
            .then((reg) => console.log("Service Worker Register ", reg))
            .catch((err) => console.log("Failed To Register Service Worker ", err))
    });
}