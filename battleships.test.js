const { Ship, gameBoard } = require('./battleships')

test('Class has properties', () => {
    let ship1 = new Ship(5);
    expect(ship1.length).toBeTruthy();
    expect(ship1.isSunk).toBeFalsy();
    expect(ship1.hitNo).toBe(0);
})

test('Gameboard is set-up correctly', () => {
    let gameBoard1 = new gameBoard();
    expect(gameBoard1.board.length).toBe(10);
})

test('Place ship works', () => {
    let gameBoard2 = new gameBoard();
    gameBoard2.placeShip(3, 4, 5);
    expect(gameBoard2.board[3][4]).toBe(1);
    expect(gameBoard2.board[3][6]).toBe(1);
})