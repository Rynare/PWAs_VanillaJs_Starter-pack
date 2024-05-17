// eslint-disable-next-line import/named
import { App } from "../../app/App.js";

async function fetchViewAsHtml(viewName = "") {
  const trimmedViewName = viewName.trim();
  const viewsDir = trimmedViewName.startsWith("/") ? "./views" : "./views/"; //! relative ke-folder dist
  const viewPath = `${viewsDir}${viewName}`;

  const response = await fetch(viewPath);
  if (!response.ok) {
    throw new Error(`View tidak ditemukan: ${response.statusText}`);
  }
  return response.text();
}

async function renderView(viewName = "") {
  const html = await fetchViewAsHtml(viewName);
  App.mainContent.innerHTML = "";
  App.mainContent.innerHTML = html;
}

export { renderView, fetchViewAsHtml };
