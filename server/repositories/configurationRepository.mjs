import { ConfigurationService } from "../services/configurationService.mjs";

export class ConfigurationRepository {
  constructor() {
    this.service = new ConfigurationService();
  }

  async getLanguages() {
    return this.service.getLanguages();
  }

  async getCountries() {
    return this.service.getCountries();
  }
}