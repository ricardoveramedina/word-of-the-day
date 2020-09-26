const { fetchWord } = require('./fetcher');

const TOTAL_PAGES = 1052;
const url = 'https://jisho.org/search/%23common%20%23words?page=';

test('should return a word', async () => {
    const wordData = fetchWord(TOTAL_PAGES, url);

    expect(await wordData).toHaveProperty('furigana');
    expect(await wordData).toHaveProperty('kanji');
    expect(await wordData).toHaveProperty('jlptLevel');
    expect(await wordData).toHaveProperty('typeOfWord');
    expect(await wordData).toHaveProperty('meanings');
});
