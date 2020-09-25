const cheerio = require('cheerio');
const helper = require('./helper');

//Ask how many words in that page, then random select a word url.
const getRandomWordUrl = (data) => {
    const $ = cheerio.load(data);
    const totalWordsPerPage = $('.concept_light').length;
    const randomNum = helper.randomNumber(totalWordsPerPage);

    const urlPage = $('.concept_light')
        .eq(randomNum - 1)
        .find('a.light-details_link')
        .attr('href');

    return urlPage ? urlPage.replace(/\/\//g, 'https://') : '';
};

const clearRaw = (data) => {
    const $ = cheerio.load(data);

    //HTML CLASS NAMES
    const conceptLightWrapper = $('.concept_light')
        .children('.concept_light-wrapper')
        .first();
    const conceptLightMeanings = $('.concept_light')
        .children('.concept_light-meanings')
        .first();

    const furigana = conceptLightWrapper.find('span.furigana').text().trim();
    const kanji = conceptLightWrapper.find('span.text').text().trim();
    const typeOfWord = conceptLightMeanings.find('.meaning-tags').html();
    const jlptLevel = conceptLightWrapper
        .find('span.concept_light-tag')
        .next()
        .html();
    let meanings = [];
    conceptLightMeanings
        .find('.meaning-definition')
        .find('.meaning-meaning')
        .each(function (i, e) {
            meanings[i] = $(this).text();
        });

    return { furigana, kanji, jlptLevel, typeOfWord, meanings };
};

module.exports = { getRandomWordUrl, clearRaw };
