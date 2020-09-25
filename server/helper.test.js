const { randomNumber } = require('./helper');

test('should return a random number', () => {
    const mockNumber = jest.fn();
    mockNumber(8);
    const newNumber = randomNumber(mockNumber);

    expect(typeof newNumber).toBe('number');
});
