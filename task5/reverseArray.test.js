import { reverseArray } from "./reverseArray";

it ('should reverse array', () => {
    const result = reverseArray([1, 5, 10]);
    expect(result).toEqual([10, 5, 1])
})

it ('test if argument is not array', () => {
    const result = reverseArray('1, 5, 123, 21');
    expect(result).toEqual(null)
})

it ('test mutation array', () => {
    const array = [1, 4, 6];
    reverseArray(array)
    expect(array).toEqual([1, 4, 6])
})