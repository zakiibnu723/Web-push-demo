// sw.js (empty for demo)
// Tapi wajib ada agar Notification bisa muncul via service worker
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
