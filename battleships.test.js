const Ship = require('./battleships')

test('Class has properties', () => {
    let ship1 = new Ship(5);
    expect((ship1.length)).toBeTruthy();
    expect((ship1.isSunk)).toBeFalsy();
    expect((ship1.hitNo)).toBe(0);
})
