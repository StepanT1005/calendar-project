import getMinSquaredNumber from './getMinSquaredNumber.js'

it ('Should get min squared number', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
});

it ('Should get min squared number', () => {
    const result = getMinSquaredNumber('');
    expect(result).toEqual(null);
});

it ('Should get min squared number', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, 20]);
    expect(result).toEqual(4);
})

