/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = (self.__precacheManifest || []).concat(
  [{"revision":"079d4cd550aff1da5e32d0963a88c4ef","url":"asset-manifest.json"},{"revision":"f1dbb0fd2878b615f6b1ca2df7272070","url":"favicon.ico"},{"revision":"c059a1caea93124a8e70eaed0812a7ea","url":"index.html"},{"revision":"5ffd09fa0367a4f7e8b87d4218a19fbe","url":"logo192.png"},{"revision":"3dfdb4730d261a0a1dd21e352cb16c66","url":"logo512.png"},{"revision":"dc1d7f86582efa76923d1afb2432a135","url":"manifest.json"},{"revision":"f3022ef5aadf1a553bac2c43c8269f68","url":"precache-manifest.f3022ef5aadf1a553bac2c43c8269f68.js"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"0ff88513e35d8a4c7d0b3216f06ad996","url":"script.json"},{"revision":"1472653e7cd5f55fc8eabda93770382e","url":"static/css/main.5f361e03.chunk.css"},{"revision":"9d43ff32438e256401b4962465b0f535","url":"static/js/2.df6e9efd.chunk.js"},{"revision":"c64c486544348f10a6d6c716950bc223","url":"static/js/2.df6e9efd.chunk.js.LICENSE.txt"},{"revision":"845052c3b4824cf536cb5ae0b830e469","url":"static/js/main.6ade0f56.chunk.js"},{"revision":"51c4db03604d232fa30d602ce785adeb","url":"static/js/runtime-main.cfe07215.js"},{"revision":"48420434734c62d2e96d484272d6bdf9","url":"static/media/D_START.m4a"},{"revision":"16c7e02bb801ce7c3c83eaf0c52502d2","url":"static/media/D1_1.m4a"},{"revision":"c438cbf467bf8f42900e4d817d1203ed","url":"static/media/D1_2.m4a"},{"revision":"4414fbb1eecbe6ab751c7338798783df","url":"static/media/D1_Q.m4a"},{"revision":"50a60f34cc5538778060b8ba242ac1f2","url":"static/media/D1.m4a"},{"revision":"6bb969d5104a350c90b96d4d1063f41f","url":"static/media/D2_1.m4a"},{"revision":"950028f9711b86d7d9e619c157e1950d","url":"static/media/D2_2.m4a"},{"revision":"ac573ffe123f34780b914126ab0f8955","url":"static/media/D2_Q.m4a"},{"revision":"df94c54f84e272b0a79cf74ae3355bd3","url":"static/media/D3_1.m4a"},{"revision":"f8aa10ced4e72cf88643767971e65300","url":"static/media/D3_2.m4a"},{"revision":"cadeb22367731b12fa5035ca40d46c96","url":"static/media/D3_Q.m4a"},{"revision":"038ee42f6c85092736d620765add422e","url":"static/media/D4.m4a"},{"revision":"704d465b38b81fb44cb0fbdd4116b2cd","url":"static/media/D5.m4a"},{"revision":"3a8f730a55d095a8f80114f5ff0c641f","url":"static/media/D6.m4a"},{"revision":"99134407a5d94380179ed88e91f24e90","url":"static/media/D7.m4a"}]
);

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