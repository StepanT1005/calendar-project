import { withdraw } from "./withdraw";

it ('test if client have money', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

    expect(result).toEqual(37)
});

it ('should change balance array', () => {

    const balancesArr = [1400, 87, -6];

    withdraw(['Ann', 'John', 'User'], balancesArr, 'John', 50);

    expect(balancesArr).toEqual([1400, 37, -6])
});

it ('if client dont have money', () => {

    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

    expect(result).toEqual(-1)
});



