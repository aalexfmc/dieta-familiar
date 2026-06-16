const CACHE_NAME = 'nutrifamilia-v8';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './styles.css',
  './manifest.json',
  './icon.svg'
];

// Instalar Service Worker y cachear recursos estáticos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activar Service Worker y limpiar cachés antiguas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Estrategia Stale-While-Revalidate: servir desde caché y actualizar en segundo plano
self.addEventListener('fetch', (e) => {
  // Evitar interceptar llamadas de sincronización de la API u otras URLs externas que no correspondan al plan local
  if (e.request.url.includes('/api/sync') || !e.request.url.startsWith(self.location.origin)) {
    return;
  }

  e.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(e.request).then((cachedResponse) => {
        const fetchPromise = fetch(e.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            cache.put(e.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Fallback silencioso si no hay conexión
        });

        // Devolver la respuesta cacheada inmediatamente o esperar a la de red
        return cachedResponse || fetchPromise;
      });
    })
  );
});
