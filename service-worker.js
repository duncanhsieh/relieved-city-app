importScripts("/relieved-city-app/precache-manifest.7d83f0c329fc57d7f8356efdd26d3b39.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


self.__precacheManifest = (self.__precacheManifest || []).concat([]);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/relieved-city-app/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
