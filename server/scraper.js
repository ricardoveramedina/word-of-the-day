const cheerio = require('cheerio');
const helper = require('./helper');

const functionsRequest = {
    clearRaw: (data) => {
        const $ = cheerio.load(data);

        //HTML CLASS NAMES
        const $conceptLightWrapper = $('.concept_light').children(
            '.concept_light-wrapper'
        );
        const $conceptLightMeanings = $('.concept_light').children(
            '.concept_light-meanings'
        );

        const furigana = $conceptLightWrapper
            .find('span.furigana')
            .text()
            .trim();

        const kanji = $conceptLightWrapper.find('span.text').text().trim();

        const jlptLevel = $conceptLightWrapper
            .find('span.concept_light-tag')
            .next()
            .html();

        const typeOfWord = $conceptLightMeanings.find('.meaning-tags').html();

        let meanings = [];
        $conceptLightMeanings
            .find('.meaning-definition')
            .find('.meaning-meaning')
            .each(function (i, e) {
                meanings[i] = $(this).text();
            });

        //TODO: type of word to map or object with typeofword, meaning and a frase with translation.
        //TODO: Kanjis who compond the word with meaning, Kunyomi and onyomi.
        //TODO: add when deploy NODE_ENV=development node server.js

        return { furigana, kanji, jlptLevel, typeOfWord, meanings };
    },
    //Ask how many words in that page, then random select a word url.
    getRandomWordUrl: (data) => {
        const $ = cheerio.load(data);
        const totalWordsPerPage = $('.concept_light').length;
        let randomNum = helper.randomNumber(totalWordsPerPage);
        randomNum = 3;
        const urlPage = $('.concept_light')
            .eq(randomNum - 1)
            .find('a.light-details_link')
            .attr('href');
        return urlPage.replace(/\/\//g, 'https://');
    },
};

module.exports = { functionsRequest };
