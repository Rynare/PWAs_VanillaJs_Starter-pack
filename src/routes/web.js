/* eslint-disable import/named */
import { HomeController } from "../app/controller/HomeController.js";
import { renderView } from "../utils/helper/view-helper.js";
import { router } from "./router.js";

const routes = [
  router(404, () => renderView("/pages/404.html")),
  router("/", () => renderView("/pages/home.html")),
  router("/home", () => renderView("/pages/home.html")),
  router("/example", [new HomeController(), "index"]),
];

export { routes };
