const scraper = require('./scraper');
const httpClient = require('./http');
const helper = require('./helper');

async function fetchWord(url, totalPages) {
    const numberPage = helper.randomNumber(totalPages);
    let randomPage = await httpClient.fetchData(url + numberPage);
    const randomUrl = await scraper.getRandomWordUrl(randomPage);
    randomPage = await httpClient.fetchData(randomUrl);

    return (wordData = await scraper.clearRaw(randomPage));
}

module.exports = { fetchWord };
