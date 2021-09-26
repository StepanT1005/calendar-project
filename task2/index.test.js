import getSum, {getSquaredNumbers, getOddNumbers} from './calculator'

it ('Should get squared numbers', () =>{
    const result = getSquaredNumbers([1, 2, 3]);
    
    expect(result).toEqual([1, 4, 9]);
})

it ('Should keep odd numbers', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5])
})

it ('Get sum numbers', () => {
    const result = getSum(10, 15);
    expect(result).toEqual(25)
})