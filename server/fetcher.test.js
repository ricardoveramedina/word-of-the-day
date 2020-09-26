const { fetchWord } = require('./fetcher');

const url = 'https://jisho.org/search/%23common%20%23words?page=';
const totalPages = 1052;

test('should return a word', async () => {
    const wordData = fetchWord(url, totalPages);

    expect(await wordData).toHaveProperty('furigana');
    expect(await wordData).toHaveProperty('kanji');
    expect(await wordData).toHaveProperty('jlptLevel');
    expect(await wordData).toHaveProperty('typeOfWord');
    expect(await wordData).toHaveProperty('meanings');
});
