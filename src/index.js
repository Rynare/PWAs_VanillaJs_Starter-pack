// eslint-disable-next-line import/named
import { App } from "./app/App.js";
import "./app/components/Link-Router.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();

  window.addEventListener("hashchange", async () => {
    await app.renderPage();
  });

  window.addEventListener("load", async () => {
    await app.renderPage();
  });
});
