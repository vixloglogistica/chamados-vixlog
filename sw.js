/* Chamados Vix Log — service worker
   Troque a versão abaixo sempre que atualizar o app: isso força
   todos os celulares a baixarem a versão nova na próxima abertura. */
const VERSAO = 'chamados-vixlog-v1';
const ARQUIVOS = [
  './',
  './index.html',
  './manifest.json',
  './icones/icone-192.png',
  './icones/icone-512.png',
  './icones/icone-maskable-512.png',
  './icones/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSAO)
      .then(c => c.addAll(ARQUIVOS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== VERSAO).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(resp => {
      if(resp) return resp;
      return fetch(e.request).then(rede => {
        const copia = rede.clone();
        caches.open(VERSAO).then(c => c.put(e.request, copia)).catch(()=>{});
        return rede;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
