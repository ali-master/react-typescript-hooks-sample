importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
	console.log("Workbox is loaded");

	const CACHE_NAME_DETAILS = {
		prefix: "react-test",
		suffix: "v1.0",
		precache: "install-time",
		runtime: "run-time",
	};
	workbox.core.setCacheNameDetails(CACHE_NAME_DETAILS);
	workbox.core.skipWaiting();
	workbox.core.clientsClaim();

	/* injection point for manifest files.  */
	workbox.precaching.precacheAndRoute([], {
		cleanUrls: true,
	});

	workbox.routing.registerRoute(
		new RegExp(/\/static\/.*\.(?:js|css)/),
		new workbox.strategies.StaleWhileRevalidate({
			cacheName: `${CACHE_NAME_DETAILS.prefix}-assets-${CACHE_NAME_DETAILS.suffix}`,
			cacheExpiration: {
				maxEntries: 3,
				maxAgeSeconds: 7 * 24 * 60 * 60,
			},
		}),
	);

	workbox.routing.registerRoute(
		/.*\.(?:png|jpe?g|svg|gif)/,
		new workbox.strategies.StaleWhileRevalidate({
			cacheName: `${CACHE_NAME_DETAILS.prefix}-images-${CACHE_NAME_DETAILS.suffix}`,
			cacheExpiration: {
				maxEntries: 3,
				maxAgeSeconds: 7 * 24 * 60 * 60,
			},
		}),
	);

	workbox.routing.registerRoute(
		/.*\.(?:ttf|woff2?|eot)/,
		new workbox.strategies.StaleWhileRevalidate({
			cacheName: `${CACHE_NAME_DETAILS.prefix}-fonts-${CACHE_NAME_DETAILS.suffix}`,
			cacheExpiration: {
				maxEntries: 3,
				maxAgeSeconds: 7 * 24 * 60 * 60,
			},
		}),
	);

	workbox.routing.registerRoute(/[?&]bustprecache=.*$/i, new workbox.strategies.NetworkFirst());
	/* custom cache rules*/
	workbox.routing.registerNavigationRoute("/index.html", {
		blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
	});

	self.addEventListener("activate", function() {
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (!cacheName.endsWith(CACHE_NAME_DETAILS.suffix)) {
						return caches.delete(cacheName);
					}
				}),
			);
		});
		self.clients.matchAll().then(clients => {
			clients.forEach(client => {
				client.postMessage({
					type: "versionCheck",
					version: CACHE_NAME_DETAILS.suffix,
				});
			});
		});
		// );
	});
	workbox.routing.setCatchHandler(({ event }) => {
		switch (event.request.destination) {
			case "document":
				return caches.match(url);
				break;

			default:
				// If we don't have a fallback, just return an error response.
				return Response.error();
		}
	});
} else {
	console.log("Boo! Workbox didn't load");
}
