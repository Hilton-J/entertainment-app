import { ConfigurationRepository } from "../repositories/configurationRepository.mjs";

export class ConfigurationController {
  constructor() {
    this.repository = new ConfigurationRepository();
  }

  async getLanguagesHandler(req, res) {
    try {
      const languages = await this.repository.getLanguages();
      res.json(languages.data);
      // res.status(200).json(movies); //with status(200), you're explicitly setting the OK responce code to 200
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch languages', stack: error.stack });
    }
  }

  async getCountriesHandler(req, res) {
    try {
      const countries = await this.repository.getCountries();
      res.json(countries.data);
      // res.status(200).json(movies); //with status(200), you're explicitly setting the OK responce code to 200
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch countries' });
    }
  }
}