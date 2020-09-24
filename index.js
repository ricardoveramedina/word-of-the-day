const cheerio = require("cheerio");
const axios = require("axios");

/* const functions = {
    
    requestSite: () => axios.get('https://jsonplaceholder.typicode.com/users/1')//http://quotes.toscrape.com
    .then(res => res.data)
    .catch(err => 'error')
https://jisho.org/search/%23common%20%23words?page=7
}; */

const totalPages = 1052;
const util = require("util");

function randomPage(totalPages) {
    return Math.floor(Math.random() * totalPages);
}

const functionsRequest = {
    //http://quotes.toscrape.com
    //https://jsonplaceholder.typicode.com/users/1

    //go to a url
    fetchData: (url) => {
        return axios.get(url).then((res) => res.data);
    },
    //Ask how many words in that page, then random select a word url.
    randomWordUrl: (data) => {
        return new Promise((resolve, reject) => {
            if (data) {
                const $ = cheerio.load(data);
                const totalWordsPerPage = $(".concept_light").length;
                let randomNum = randomPage(totalWordsPerPage);
                randomNum = 3;
                const urlPage = $(".concept_light")
                    .eq(randomNum - 1)
                    .find("a.light-details_link")
                    .attr("href");
                resolve(urlPage.replace(/\/\//g, "https://"));
            }
        });
    },
    fetchEachWord: (data) => {
        return new Promise((resolve, reject) => {
            if (data) {
                const $ = cheerio.load(data);
                const words = $(".concept_light").each((i, word) => {
                    const furigana = $(word)
                        .children(".concept_light-wrapper")
                        .find("span.furigana")
                        .text()
                        .trim();
                    console.log(i, "furigana: " + furigana);

                    const kanji = $(word)
                        .children(".concept_light-wrapper")
                        .find("span.text")
                        .text()
                        .trim();
                    console.log("kanji: " + kanji);

                    const jlptLevel = $(word)
                        .children(".concept_light-wrapper")
                        .find("span.concept_light-tag")
                        .next()
                        .html();
                    console.log("jlpt Level: " + jlptLevel);

                    const typeOfWord = $(word)
                        .children(".concept_light-meanings")
                        .find(".meaning-tags")
                        .html();
                    console.log("type of word: " + typeOfWord);

                    let meaningArr = [];
                    const meaning = $(word)
                        .children(".concept_light-meanings")
                        .find(".meaning-definition")
                        .find(".meaning-meaning")
                        .each(function (i, e) {
                            meaningArr[i] = $(this).text();
                        });
                    console.log("meaning of word: " + meaningArr);

                    //TODO: type of word to map or object with typeofword, meaning and a frase with translation.
                    //TODO: Kanjis who compond the word with meaning, Kunyomi and onyomi.

                    return $(word).text();
                });

                resolve(words);
            }
        });
    },
};

async function init() {
    numberPage = randomPage(totalPages);
    console.log("numberPage: " + numberPage);

    //let url = "https://jisho.org/search/%23common%20%23words?page=" + numberPage;
    let url = "https://jisho.org/search/%23common%20%23words?page=" + 1;
    let data = await functionsRequest.fetchData(url);

    url = await functionsRequest.randomWordUrl(data);
    console.log(await url);
    data = await functionsRequest.fetchData(url);

    const words = await functionsRequest.fetchEachWord(data);
}

init();
