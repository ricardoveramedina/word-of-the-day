'use strick';
const config = require('config');
const fetcher = require('./fetcher');
const express = require('express');
const app = express();

const appConfig = {};
const scrapperConfig = {};

if (config.has('appConfig')) {
    appConfig.port = config.appConfig.port;
    scrapperConfig.url = config.scraperConfig.url;
    scrapperConfig.totalPages = config.scraperConfig.totalPages;
} else {
    throw new Error('no config file');
}

app.get('/randomWord', (req, res) => {
    fetcher
        .fetchWord(scrapperConfig.url, scrapperConfig.totalPages)
        .then((data) => res.send(data));
});

app.listen(appConfig.port, () => {});
