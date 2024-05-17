import { Controller } from "./Controller.js";

class HomeController extends Controller {
  constructor() {
    super();
  }

  async index() {
    await this.view("/pages/home.html");
  }
}

export { HomeController };
