// Optica Miranda -- Service Worker para Push Notifications

self.addEventListener("install", function (event) {
self.skipWaiting();
});

self.addEventListener("activate", function (event) {
event.waitUntil(self.clients.claim());
});

self.addEventListener("push", function (event) {
var data = {};
try {
data = event.data ? event.data.json() : {};
} catch (e) {
data = { title: "Optica Miranda", body: event.data ? event.data.text() : "" };
}

var title = data.title || "Optica Miranda";
var options = {
body: data.body || "",
icon: "notification-icon.png",
badge: "notification-icon.png",
data: { url: data.url || "./" },
};

event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function (event) {
event.notification.close();
var url = (event.notification.data && event.notification.data.url) || "./";

event.waitUntil(
self.clients
.matchAll({ type: "window", includeUncontrolled: true })
.then(function (clientList) {
for (var i = 0; i < clientList.length; i++) {
var client = clientList[i];
if ("focus" in client) {
client.navigate(url);
return client.focus();
}
}
if (self.clients.openWindow) {
return self.clients.openWindow(url);
}
})
);
});
