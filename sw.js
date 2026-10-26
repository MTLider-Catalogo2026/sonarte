// Service worker mínimo: cachea el "cascarón" de la app para que abra sin internet.
// Los sonidos del usuario viven en IndexedDB (no aquí).
var CACHE = "sonarte-v1";
var ARCHIVOS = ["index.html", "manifest.json", "icono.svg"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ARCHIVOS); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  if(e.request.method!=="GET") return;
  e.respondWith(
    caches.match(e.request).then(function(r){
      return r || fetch(e.request).then(function(resp){
        try{ var cp=resp.clone(); caches.open(CACHE).then(function(c){ c.put(e.request, cp); }); }catch(x){}
        return resp;
      }).catch(function(){ return caches.match("index.html"); });
    })
  );
});
