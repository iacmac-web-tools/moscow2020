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

workbox.core.setCacheNameDetails({prefix: "iacmac-conference-nn2020"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/css/concated.min.css",
    "revision": "8c1693860b4b0a94c6ffe22fc8ae23c3"
  },
  {
    "url": "/css/cookieconsent.min.css",
    "revision": "acf82ee47549fdc386d02768992a49ad"
  },
  {
    "url": "/css/custom.css",
    "revision": "f25ed20738e82c8fe0fb19387043dbef"
  },
  {
    "url": "/css/jquery.fancybox.min.css",
    "revision": "a2d42584292f64c5827e8b67b1b38726"
  },
  {
    "url": "/css/normalize.min.css",
    "revision": "36974225aa51d7b413c9a1cfb22e9c06"
  },
  {
    "url": "/font/LatoLatin-Black.eot",
    "revision": "ad3a6cf7d73d0ee8746a622078633e88"
  },
  {
    "url": "/font/LatoLatin-Black.ttf",
    "revision": "3dc3ee7177ed30347e19f60c75524e2a"
  },
  {
    "url": "/font/LatoLatin-Black.woff",
    "revision": "052fee1f65013cdb90c0f81032eca95a"
  },
  {
    "url": "/font/LatoLatin-Black.woff2",
    "revision": "8534d15fb255bd1d402ab8681d9dd70c"
  },
  {
    "url": "/font/LatoLatin-BlackItalic.eot",
    "revision": "30639dd3ee15815c559c616c8ca708de"
  },
  {
    "url": "/font/LatoLatin-BlackItalic.ttf",
    "revision": "801f07d4219904a28b731e4743ce3887"
  },
  {
    "url": "/font/LatoLatin-BlackItalic.woff",
    "revision": "a33b8e3828e7836d6aa2e748e3ed5d29"
  },
  {
    "url": "/font/LatoLatin-BlackItalic.woff2",
    "revision": "95b46b887382fae4ab18093a3c2c7baf"
  },
  {
    "url": "/font/LatoLatin-Bold.eot",
    "revision": "86f41d54c4fa52ecfcae6204c03e4782"
  },
  {
    "url": "/font/LatoLatin-Bold.ttf",
    "revision": "20ee9bd18996dbf668b6585cf59a6bed"
  },
  {
    "url": "/font/LatoLatin-Bold.woff",
    "revision": "f323edeea9058ded98148eefffb1794a"
  },
  {
    "url": "/font/LatoLatin-Bold.woff2",
    "revision": "3ff66ada9b57d10c17e415222486ec21"
  },
  {
    "url": "/font/LatoLatin-BoldItalic.eot",
    "revision": "328250e7434a3067a36856da8f62a9bc"
  },
  {
    "url": "/font/LatoLatin-BoldItalic.ttf",
    "revision": "e22cd5242829916ff8a5e0c6464c480e"
  },
  {
    "url": "/font/LatoLatin-BoldItalic.woff",
    "revision": "2538f760e9fb5f5ec46f70facba55ac5"
  },
  {
    "url": "/font/LatoLatin-BoldItalic.woff2",
    "revision": "e3efadc700b8e6364a98fda1b2e2b784"
  },
  {
    "url": "/font/LatoLatin-Hairline.eot",
    "revision": "935f82fdaa028827c8301dfc4a67d081"
  },
  {
    "url": "/font/LatoLatin-Hairline.ttf",
    "revision": "6f2d049dd415a07a1358afcd4b0fabc8"
  },
  {
    "url": "/font/LatoLatin-Hairline.woff",
    "revision": "3e6ddabeaf5aa44e555d87ca1fdc04d5"
  },
  {
    "url": "/font/LatoLatin-Hairline.woff2",
    "revision": "41ecd3127549aeab2002880270fea800"
  },
  {
    "url": "/font/LatoLatin-HairlineItalic.eot",
    "revision": "cec442a2c87a7a1a7ae8a0508461898b"
  },
  {
    "url": "/font/LatoLatin-HairlineItalic.ttf",
    "revision": "7b900fd0e142de9da50a699f9ca33c9b"
  },
  {
    "url": "/font/LatoLatin-HairlineItalic.woff",
    "revision": "0937a9a93f08a2959cb2b49c6365cbf8"
  },
  {
    "url": "/font/LatoLatin-HairlineItalic.woff2",
    "revision": "41da733bdf40d2263438761d9dda2915"
  },
  {
    "url": "/font/LatoLatin-Heavy.eot",
    "revision": "58956fed698976d6a0cfb988e5286fce"
  },
  {
    "url": "/font/LatoLatin-Heavy.ttf",
    "revision": "f1987d58e7f49427491b6cfa718a47ec"
  },
  {
    "url": "/font/LatoLatin-Heavy.woff",
    "revision": "56fedb5eb6e5edfe39e972372688ba32"
  },
  {
    "url": "/font/LatoLatin-Heavy.woff2",
    "revision": "913305344fd127206274f133b7b9ce46"
  },
  {
    "url": "/font/LatoLatin-HeavyItalic.eot",
    "revision": "99c388391eaa67f4e1b82d42a37ed66f"
  },
  {
    "url": "/font/LatoLatin-HeavyItalic.ttf",
    "revision": "ab9f021a64ba0f1c130d4b4a1197e928"
  },
  {
    "url": "/font/LatoLatin-HeavyItalic.woff",
    "revision": "69dcfb26df1a890c750b2a067704e489"
  },
  {
    "url": "/font/LatoLatin-HeavyItalic.woff2",
    "revision": "a1ccfc87a5aea51a349760380438e965"
  },
  {
    "url": "/font/LatoLatin-Italic.eot",
    "revision": "6df64ed5a283ba37d65346e4c133fd21"
  },
  {
    "url": "/font/LatoLatin-Italic.ttf",
    "revision": "d9129929b06db37a97fed3218b48e13c"
  },
  {
    "url": "/font/LatoLatin-Italic.woff",
    "revision": "6b654922e092ce676796215a3bb19620"
  },
  {
    "url": "/font/LatoLatin-Italic.woff2",
    "revision": "5e75c678391d787696bb192db689fcaf"
  },
  {
    "url": "/font/LatoLatin-Light.eot",
    "revision": "54dc25dc196b054461c6f1009ac395f2"
  },
  {
    "url": "/font/LatoLatin-Light.ttf",
    "revision": "f7b5d804f74da32f35000a141f5812fc"
  },
  {
    "url": "/font/LatoLatin-Light.woff",
    "revision": "4725b48f890735506fe7f59df4eb0921"
  },
  {
    "url": "/font/LatoLatin-Light.woff2",
    "revision": "c425d3f33c7cfa180fd670619665f6fe"
  },
  {
    "url": "/font/LatoLatin-LightItalic.eot",
    "revision": "aad33fba8aa32ab693ec04679573769d"
  },
  {
    "url": "/font/LatoLatin-LightItalic.ttf",
    "revision": "74baf0056f7fa382e6c7aaf6b1bc8965"
  },
  {
    "url": "/font/LatoLatin-LightItalic.woff",
    "revision": "0e1583679fdd9bc5407fdc3df51d425a"
  },
  {
    "url": "/font/LatoLatin-LightItalic.woff2",
    "revision": "80343ed6ac637183d30cdf775eacfccd"
  },
  {
    "url": "/font/LatoLatin-Medium.eot",
    "revision": "195de9cbebe8ebcb6ae7232017c61906"
  },
  {
    "url": "/font/LatoLatin-Medium.ttf",
    "revision": "fe06e5d5fbc7f65b83a2830358676e6d"
  },
  {
    "url": "/font/LatoLatin-Medium.woff",
    "revision": "4aecd87d87ad3f58dbc553ad0c42ea22"
  },
  {
    "url": "/font/LatoLatin-Medium.woff2",
    "revision": "ba687a5dc3dbbc777acb2eb404870278"
  },
  {
    "url": "/font/LatoLatin-MediumItalic.eot",
    "revision": "075f27df741c07fc07c0ae2a8a5791c3"
  },
  {
    "url": "/font/LatoLatin-MediumItalic.ttf",
    "revision": "80cd5551d5217c0cad97582a9abb2b37"
  },
  {
    "url": "/font/LatoLatin-MediumItalic.woff",
    "revision": "59db2b694e7e025314c23b578775a103"
  },
  {
    "url": "/font/LatoLatin-MediumItalic.woff2",
    "revision": "60003618b6984a3e06022cdaa026b164"
  },
  {
    "url": "/font/LatoLatin-Regular.eot",
    "revision": "6cfad5881181ae658a6efdd68889a690"
  },
  {
    "url": "/font/LatoLatin-Regular.ttf",
    "revision": "c305a828efdfe8d0e57a840028d3c289"
  },
  {
    "url": "/font/LatoLatin-Regular.woff",
    "revision": "586ec8dc57c264cffafa044f8603e7bb"
  },
  {
    "url": "/font/LatoLatin-Regular.woff2",
    "revision": "3cd36578026d6c12eddf9a5c671a251d"
  },
  {
    "url": "/font/LatoLatin-Semibold.eot",
    "revision": "b683c54b2bc1bf989c5f7e6f2b3536e2"
  },
  {
    "url": "/font/LatoLatin-Semibold.ttf",
    "revision": "b3831fa0a2596da983ef2317cc45acfe"
  },
  {
    "url": "/font/LatoLatin-Semibold.woff",
    "revision": "ec130592e6a00b00613ea608a0a06ea8"
  },
  {
    "url": "/font/LatoLatin-Semibold.woff2",
    "revision": "008763cc6182e2b7ea62dbc99d8cc563"
  },
  {
    "url": "/font/LatoLatin-SemiboldItalic.eot",
    "revision": "70354df963e55623f6eaf21bc284972e"
  },
  {
    "url": "/font/LatoLatin-SemiboldItalic.ttf",
    "revision": "f4aaa0404ce1f63b4b16371a3c4385cf"
  },
  {
    "url": "/font/LatoLatin-SemiboldItalic.woff",
    "revision": "3de9b43943b64b70f88cecb99d406df5"
  },
  {
    "url": "/font/LatoLatin-SemiboldItalic.woff2",
    "revision": "656cf9170f1e53fc58c7fa4388929d52"
  },
  {
    "url": "/font/LatoLatin-Thin.eot",
    "revision": "059d3dc8abf7c5cae1b68636c1ffb682"
  },
  {
    "url": "/font/LatoLatin-Thin.ttf",
    "revision": "c61da09cfb4dcae1765a34deb06bfff3"
  },
  {
    "url": "/font/LatoLatin-Thin.woff",
    "revision": "c65fe92919208091f3c343637c1e476f"
  },
  {
    "url": "/font/LatoLatin-Thin.woff2",
    "revision": "a57863fd24db5c765bfbf401a566f290"
  },
  {
    "url": "/font/LatoLatin-ThinItalic.eot",
    "revision": "d1732910c26d17634be6fa69002c546d"
  },
  {
    "url": "/font/LatoLatin-ThinItalic.ttf",
    "revision": "55fadc4d2bc33d566b8c4eab28c02e7c"
  },
  {
    "url": "/font/LatoLatin-ThinItalic.woff",
    "revision": "0946d9832e57b36155c61a42037ce506"
  },
  {
    "url": "/font/LatoLatin-ThinItalic.woff2",
    "revision": "7c534cc0e8a56ee70fbe5eb39ee2cedb"
  },
  {
    "url": "/js/cookieconsent.min.js",
    "revision": "4a48532bf0b17c058b8b6854f49de23f"
  },
  {
    "url": "/js/core.min.js",
    "revision": "21cc6e47594a4b6f98c1077e32b572ed"
  },
  {
    "url": "/js/imagesloaded.pkgd.min.js",
    "revision": "e2c1a80b99251b7b94726b41312fb160"
  },
  {
    "url": "/js/jquery-3.4.1.min.js",
    "revision": "f832e36068ab203a3f89b1795480d0d7"
  },
  {
    "url": "/js/jquery.fancybox.min.js",
    "revision": "49a6b4d019a934bcf83f0c397eba82d8"
  },
  {
    "url": "/js/lazysizes.min.js",
    "revision": "b80e49640d4794d4333d00db76ea22f7"
  },
  {
    "url": "/js/lunr-0.4.1.min.js",
    "revision": "bd934eee8a276e348c20e6d166c82862"
  },
  {
    "url": "/js/lunr-search.js",
    "revision": "3718f7fdc460e7aca3dafb6091e32060"
  },
  {
    "url": "/js/lunr.ru.min.js",
    "revision": "698a251fbfb5fa8d09540ac5f76b46a8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "ignoreURLParametersMatching": [/./]
});

workbox.routing.registerRoute(/(?:\/)$/, new workbox.strategies.NetworkFirst({ "cacheName":"html", plugins: [new workbox.expiration.Plugin({ maxAgeSeconds: 604800, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:mp3|wav|m4a)$/, new workbox.strategies.CacheFirst({ "cacheName":"audio", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:m4v|mpg|avi)$/, new workbox.strategies.CacheFirst({ "cacheName":"videos", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');

workbox.googleAnalytics.initialize({});
