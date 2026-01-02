const CACHE_NAME = 'winget-icons-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    const url = event.request.url;
    
    // Only cache image requests
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.match(event.request).then((cached) => {
                if (cached) {
                    return cached;
                }
                
                return fetch(event.request).then((response) => {
                    // Don't cache failed requests
                    if (!response || response.status !== 200) {
                        return response;
                    }
                    
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    
                    return response;
                }).catch(() => {
                    // Return nothing on network failure
                    return new Response('', { status: 404 });
                });
            })
        );
    }
});