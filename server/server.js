'use strick';
const express = require('express');
const scraper = require('./scraper');
const httpClient = require('./httpClient');
const helper = require('./helper');

const app = express();

//const totalPages = 1052; TODO: double check total pages in JISHO.
const TOTAL_PAGES = 1054;
const url = 'https://jisho.org/search/%23common%20%23words?page=';

async function fetchWord() {
    const numberPage = helper.randomNumber(TOTAL_PAGES);
    let randomPage = await httpClient.fetchData(url + numberPage);
    const randomUrl = await scraper.functionsRequest.getRandomWordUrl(
        randomPage
    );
    randomPage = await httpClient.fetchData(randomUrl);
    const wordData = await scraper.functionsRequest.clearRaw(randomPage);

    return wordData;
}

app.get('/randomWord', (req, res) => {
    fetchWord().then((data) => res.send(data));
});

app.get('/status/:parameter', (req, res) => {
    let param = req.params.parameter;
    res.send('The status is:' + param);
});

app.listen(3000, () => {});
