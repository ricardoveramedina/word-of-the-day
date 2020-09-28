const exampleHtml = require('../__mocks__/exampleHtml');
const { getRandomWordUrl, clearRaw } = require('./scraper');

test('should get a random url from jisho', () => {
  const mock = jest.fn();
  let url = getRandomWordUrl(mock);
  expect(url).toHaveLength(0);

  url = getRandomWordUrl(exampleHtml);
  expect(typeof url).toBe('string');
  expect(url).toMatch(/http/i);
});

test('should get a word furigana', () => {
  const wordData = clearRaw(exampleHtml);

  expect(wordData).toHaveProperty('furigana');
  expect(wordData).toHaveProperty('word');
  expect(wordData).toHaveProperty('jlptLevel');
  expect(wordData).toHaveProperty('typeOfWord');
  expect(wordData).toHaveProperty('meanings');
});

test('should return jlpt level', () => {
  const wordData = clearRaw(exampleHtml);
  expect(wordData).toHaveProperty('jlptLevel');
  console.log(wordData);
  wordData.jlptLevel && expect(wordData.jlptLevel).toMatch(/jlpt/gi);
});
