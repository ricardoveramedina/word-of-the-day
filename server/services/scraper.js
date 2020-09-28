const cheerio = require('cheerio');
const helper = require('../controllers/helper');

module.exports = {
  //Ask how many words in that page, then random select a word url.
  getRandomWordUrl: (data) => {
    const $ = cheerio.load(data);
    const totalWordsPerPage = $('.concept_light').length;
    const randomNum = helper.randomNumber(totalWordsPerPage);

    const urlPage = $('.concept_light')
      .eq(randomNum - 1)
      .find('a.light-details_link')
      .attr('href');

    return urlPage ? urlPage.replace(/\/\//g, 'https://') : '';
  },
  clearRaw: (data) => {
    const $ = cheerio.load(data);

    //HTML CLASS NAMES
    const conceptLightWrapper = $('.concept_light')
      .children('.concept_light-wrapper')
      .first();
    const conceptLightMeanings = $('.concept_light')
      .children('.concept_light-meanings')
      .first();

    const furigana = conceptLightWrapper.find('span.furigana').text().trim();
    const word = conceptLightWrapper.find('span.text').text().trim();
    const typeOfWord = conceptLightMeanings.find('.meaning-tags').html();
    const matchJlpt = conceptLightWrapper.html().match(/jlpt n[1-5]/gi);
    const jlptLevel = matchJlpt ? matchJlpt[0] : null;

    let meanings = [];
    conceptLightMeanings
      .find('.meaning-definition')
      .find('.meaning-meaning')
      .each(function (i, e) {
        meanings[i] = $(this).text();
      });
    [...new Set(meanings)]; //Avoid duplicates using set

    return { furigana, word, jlptLevel, typeOfWord, meanings };
  },
};
