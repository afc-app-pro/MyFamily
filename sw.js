const CACHE_NAME = 'myfamily-v2';
const PRECACHE = ['./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if(e.request.method!=='GET'||e.request.url.startsWith('chrome-extension://'))return;
  e.respondWith(caches.match(e.request).then(cached=>{
    if(cached){fetch(e.request).then(r=>{if(r&&r.status===200)caches.open(CACHE_NAME).then(c=>c.put(e.request,r.clone()));}).catch(()=>{});return cached;}
    return fetch(e.request).then(r=>{if(!r||r.status!==200)return r;caches.open(CACHE_NAME).then(c=>c.put(e.request,r.clone()));return r;}).catch(()=>caches.match('./index.html'));
  }));
});
