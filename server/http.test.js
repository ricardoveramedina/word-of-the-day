const { fetchData } = require('./http');

test('should a html and title Jisho with data', async () => {
    const rawData = fetchData(
        'https://jisho.org/search/%23common%20%23words?page=2'
    );
    //expect(await typeof rawData).toBe('string');
    expect(await rawData).toMatch(/<html>.*?title='Jisho'.*?<\/html>/is);
    expect(await rawData).toMatch('company');
});
