// Service Worker for Food Delivery PWA
const CACHE_NAME = 'food-delivery-v1';
const OFFLINE_CACHE = 'food-delivery-offline-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/assets/css/vendors/bootstrap.css',
  '/assets/css/vendors/iconsax.css',
  '/assets/css/vendors/swiper-bundle.min.css',
  '/assets/css/style.css',
  '/assets/js/bootstrap.bundle.min.js',
  '/assets/js/iconsax.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/custom-swiper.js',
  '/assets/js/template-setting.js',
  '/assets/js/script.js',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== OFFLINE_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different types of requests
  if (request.method === 'GET') {
    // Static assets - cache first
    if (isStaticAsset(request)) {
      event.respondWith(cacheFirst(request));
    }
    // API calls - network first with cache fallback
    else if (isApiCall(request)) {
      event.respondWith(networkFirst(request));
    }
    // HTML pages - network first with offline fallback
    else if (isHtmlRequest(request)) {
      event.respondWith(networkFirstWithOfflineFallback(request));
    }
    // Images - cache first with network fallback
    else if (isImageRequest(request)) {
      event.respondWith(cacheFirstWithNetworkFallback(request));
    }
    // Everything else - network first
    else {
      event.respondWith(networkFirst(request));
    }
  }
});

// Helper functions
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.includes('/assets/') || 
         url.pathname.endsWith('.css') || 
         url.pathname.endsWith('.js') ||
         url.pathname === '/manifest.json';
}

function isApiCall(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || 
         url.hostname !== location.hostname;
}

function isHtmlRequest(request) {
  return request.headers.get('accept').includes('text/html');
}

function isImageRequest(request) {
  return request.destination === 'image';
}

// Cache first strategy
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Network first with offline fallback
async function networkFirstWithOfflineFallback(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, serving offline page');
    return caches.match('/offline.html') || new Response('Offline', { status: 503 });
  }
}

// Cache first with network fallback for images
async function cacheFirstWithNetworkFallback(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Image loading failed:', error);
    return new Response('Image not available', { status: 404 });
  }
}