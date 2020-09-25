'use strick';
const express = require('express');
const scraper = require('./scraper');
const httpClient = require('./http');
const helper = require('./helper');

const app = express();

//TODO: double check total pages in JISHO.
const TOTAL_PAGES = 1052;
const url = 'https://jisho.org/search/%23common%20%23words?page=';
//for search a word https://jisho.org/search/%23common%20%23words%20noted%20family

async function fetchWord() {
    const numberPage = helper.randomNumber(TOTAL_PAGES);
    let randomPage = await httpClient.fetchData(url + numberPage);
    const randomUrl = await scraper.getRandomWordUrl(randomPage);
    randomPage = await httpClient.fetchData(randomUrl);

    return (wordData = await scraper.clearRaw(randomPage));
}

app.get('/randomWord', (req, res) => {
    fetchWord().then((data) => res.send(data));
});

//TODO: Create function fetch searchWord
//TODO: in test use shallow render in front
//TODO: add describe test
//TODO: add when deploy NODE_ENV=development node server.js

//Search word get the first result
app.get('/search/:word', (req, res) => {
    let param = req.params.word;
    res.send('The status is:' + param);
});

app.listen(3000, () => {});
