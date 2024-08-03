const { Ship, GameBoard } = require('./battleships');

test('Class has properties', () => {
    let ship1 = new Ship(5);
    expect(ship1.length).toBeTruthy();
    expect(ship1.isSunk).toBeFalsy();
    expect(ship1.hitNo).toBe(0);
});

test('GameBoard is set-up correctly', () => {
    let gameBoard1 = new GameBoard();
    expect(gameBoard1.board.length).toBe(10);
    expect(gameBoard1.board[0].length).toBe(10);
});

test('Place ship works', () => {
    let gameBoard2 = new GameBoard();
    gameBoard2.placeShip(3, 4, 5);
    expect(gameBoard2.board[3][4]).toBeInstanceOf(Ship);
    expect(gameBoard2.board[3][6]).toBeInstanceOf(Ship);
});

test('Attacks are received correctly', () => {
    let gameBoard3 = new GameBoard();
    gameBoard3.placeShip(3, 4, 5);
    gameBoard3.receiveAttack(3, 4);
    gameBoard3.receiveAttack(9, 1);
    expect(gameBoard3.board[3][4]).toBe("hit");
    expect(gameBoard3.board[9][1]).toBe("miss");
});
