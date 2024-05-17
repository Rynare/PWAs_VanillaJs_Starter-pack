import workBoxServiceWorker from "./WorkBoxServiceWorker.js";

window.addEventListener("load", () => {
  workBoxServiceWorker("./sw.bundle.js");
});
