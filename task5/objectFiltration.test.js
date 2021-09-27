import { getAdults } from "./objectFiltration";

it ('get person who age > 18', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Bob: 18 })
});

it ('test if obj is empty', () => {
    const result = getAdults({});
    expect(result).toEqual({})
});

it ('test if mutation original object', () => {
    const obj = {Tom: 17, Bob: 18};
    getAdults(obj);
    expect(obj).toEqual({Tom: 17, Bob: 18})
});