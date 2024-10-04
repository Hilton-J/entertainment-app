import { Service } from "../services/service.mjs";

export class Repository {
  constructor() {
    this.Service = new Service();
  }

  async getTrending() {
    return this.Service.getTrending();
  }

  // ... other methods
}