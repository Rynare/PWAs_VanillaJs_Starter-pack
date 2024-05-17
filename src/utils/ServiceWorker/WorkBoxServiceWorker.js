import { Workbox } from "workbox-window";

const workBoxServiceWorker = async (path) => {
  if (!("serviceWorker" in navigator)) {
    console.error("Service Worker not supported in the browser");
    return;
  }
  const wb = new Workbox(path);
  try {
    await wb.register();
  } catch (error) {
    console.error("Failed to register service worker", error);
  }
};

export default workBoxServiceWorker;
