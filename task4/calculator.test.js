import { calc } from "./calculator";

it ('calc sum', () => {
    let result = calc('1 + 4');
    expect(result).toEqual('1 + 4 = 5')
} );

it ('subtraction', () => {
    let result = calc('10 - 4');
    expect(result).toEqual('10 - 4 = 6')
} );

it ('multiplication', () => {
    let result = calc('10 * 4');
    expect(result).toEqual('10 * 4 = 40')
} );

it ('divide', () => {
    let result = calc('16 / 4');
    expect(result).toEqual('16 / 4 = 4')
} );

it ('test argument', () => {
    let result = calc({});
    expect(result).toEqual(null)
} );