const scraper = require('./scraper');
const httpClient = require('./http');
const helper = require('./helper');

async function fetchWord(TOTAL_PAGES, url) {
    const numberPage = helper.randomNumber(TOTAL_PAGES);
    let randomPage = await httpClient.fetchData(url + numberPage);
    const randomUrl = await scraper.getRandomWordUrl(randomPage);
    randomPage = await httpClient.fetchData(randomUrl);

    return (wordData = await scraper.clearRaw(randomPage));
}

module.exports = { fetchWord };
