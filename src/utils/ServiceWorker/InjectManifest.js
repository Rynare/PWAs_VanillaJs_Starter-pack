import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

const API_ENDPOINT = process.env.API_ENDPOINT;
const cacheName = new URL(API_ENDPOINT).host;
// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const cacheThisUrl = [
  `${API_ENDPOINT}/`,
];

function isCacheable(url) {
  const theUrl = url.endsWith("/") ? url : `${url}/`;
  return cacheThisUrl.includes(theUrl);
}

const backendAPI = new Route(
  ({ url }) => isCacheable(url.href),
  new StaleWhileRevalidate({
    cacheName,
  }),
);

registerRoute(backendAPI);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("push", (event) => {
  console.log("Service Worker: Pushed");

  const notificationData = {
    title: "Push Notification",
    options: {
      body: "This is a push notification",
      icon: "/favicon.webp",
      image: "/icon-512x512/icon-512x512.webp",
    },
  };

  const showNotification = self.registration.showNotification(
    notificationData.title,
    notificationData.options,
  );

  event.waitUntil(showNotification);
});
