// Service Worker - Listen for Push Events
self.addEventListener('push', function (event) {
    console.log('Push event received: ', event);

    const options = {
        body: event.data ? event.data.text() : 'No content available',
    };

    event.waitUntil(
        self.registration.showNotification('Donation Alert', options)
    );
});

// Listen for messages from the main thread (e.g., donor.js)
self.addEventListener('message', function (event) {
    console.log('Service Worker received message:', event.data);

    const { title, body } = event.data;

    if (title && body) {
        self.registration.showNotification(title, {
            body: body,
        });
    }
});

// Handle notification click event
self.addEventListener('notificationclick', function (event) {
    console.log('Notification clicked:', event.notification);
    event.notification.close();

    event.waitUntil(
        clients.openWindow('/recipient.html')
    );
});

// Install event - Cache assets
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/index.html',
                '/index.css',
                '/donor.html',
                '/donor.css',
                '/recipient.html',
                '/recipient.css',
                '/donor.js',
                '/service-worker.js',
            ]);
        })
    );
});
