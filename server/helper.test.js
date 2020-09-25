const { randomNumber } = require('./helper');

test('should return a random number', () => {
    const newNumber = randomNumber(10);
    console.log('newNumber:' + newNumber);
    expect(typeof newNumber).toBe('number');
});
