if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => console.log("Service Worker Register ",reg))
    .catch((err) => console.log("Falied ",err))
};