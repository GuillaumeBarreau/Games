import { gamesConfig } from '../../scripts/gamesConfig';

export const checkIfThereAWinner = (board, currentPlayer) => {

    const result = checkVerticalWin(board, currentPlayer)
        || checkHorizontalWin(board, currentPlayer)
        || checkDiagonalRightWin(board, currentPlayer)
        || checkDiagonalLeftWin(board, currentPlayer)

    return result;

};

// Explore the table of Top to bottom.
export const checkVerticalWin = (board, currentPlayer) => {

    let results = false;
    let cols = [...Array(gamesConfig.TicTacToe.cols)];
    let rows = [...Array(gamesConfig.TicTacToe.rows)];

    cols.forEach((_, indexCol) => {
        const newArr = rows.map((_, indexRow) => board[indexRow][indexCol])
        const map = reduceAgreenment(newArr);

        if (map[currentPlayer] && (map[currentPlayer] === gamesConfig.TicTacToe.numberToWin)) {
            results = true;
        };
    });

    return results;

}

// Explore the table of Left to Right.
export const checkHorizontalWin = (board, currentPlayer) => {

    let results = false;

    board.forEach(row => {
        const map = reduceAgreenment(row);

        if (map[currentPlayer] && (map[currentPlayer] === gamesConfig.TicTacToe.numberToWin)) {
            results = true;
        };
    })

    return results;

}

// Explore the table of Right-top to Left-bottom.
export const checkDiagonalRightWin = (board, currentPlayer) => {

    let results = false;

    let rows = [...Array(gamesConfig.TicTacToe.rows)];
    let cols = gamesConfig.TicTacToe.rows;

    const newArr = rows.map((_, indexRow) => {
        cols = (cols - 1 || 0);
        return board[indexRow][cols]
    });

    const map = reduceAgreenment(newArr);

    if (map[currentPlayer] && (map[currentPlayer] === gamesConfig.TicTacToe.numberToWin)) {
        results = true;
    };

    return results;

}

// Explore the table of left-top to Right-bottom.
export const checkDiagonalLeftWin = (board, currentPlayer) => {

    let results = false;

    let rows = [...Array(gamesConfig.TicTacToe.rows)];
    let cols;

    const newArr = rows.map((_, indexRow) => {
        cols = (cols + 1 || 0);
        return board[indexRow][cols]
    });

    const map = reduceAgreenment(newArr);

    if (map[currentPlayer] && (map[currentPlayer] === gamesConfig.TicTacToe.numberToWin)) {
        results = true;
    };

    return results;

}

const reduceAgreenment = (array) => {

    let map = array.reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 1;

        return prev;
    }, {});

    return map;

};