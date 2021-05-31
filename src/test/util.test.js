const { sum, cloneArray, subtract, sortArray } = require('../util/util')

test('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
});

test('should clone array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
});

test('should subtract two numbers', () => {
    expect(subtract(3, 2)).toBe(1);
});

test('should sort an array from high to low', () => {
    const array = [1, 3, 6, 5, 2]
    expect(sortArray(array)).toBe(array)
})
