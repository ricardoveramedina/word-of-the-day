'use strick';
const fetcher = require('./fetcher');
const express = require('express');
const app = express();

const TOTAL_PAGES = 1052;
const url = 'https://jisho.org/search/%23common%20%23words?page=';
//for search a word https://jisho.org/search/%23common%20%23words%20noted%20family

app.get('/randomWord', (req, res) => {
    fetcher.fetchWord(TOTAL_PAGES, url).then((data) => res.send(data));
});

//TODO: in test use shallow render in front
//TODO: add when deploy NODE_ENV=development node server.js

app.listen(3000, () => {});
