const helper = require('./helper');
const scraper = require('../services/scraper');
const httpClient = require('../http');

class Fetcher {
  constructor(scrapperConfig) {
    this.url = scrapperConfig.url;
    this.totalPages = scrapperConfig.totalPages;
  }
  async fetchWord() {
    const numberPage = helper.randomNumber(this.totalPages);
    let randomPage = await httpClient.fetchData(this.url + numberPage);
    const randomUrl = await scraper.getRandomWordUrl(randomPage);
    randomPage = await httpClient.fetchData(randomUrl);
    let wordData = await scraper.clearRaw(randomPage);
    wordData.link = randomUrl;

    return wordData;
  }
}

module.exports = Fetcher;
