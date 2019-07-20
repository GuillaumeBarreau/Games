export const checkVerticalWin = () => false;

export const checkHorizontalWin = () => false;

export const checkDiagonalRightWin = () => false;

export const checkDiagonalLeftWin = () => false;

export const checkIsBoarIsFull = () => false;

export const checkIfThereAWinner = () => {
    const result = checkVerticalWin()
        || checkHorizontalWin()
        || checkDiagonalRightWin()
        || checkDiagonalLeftWin();

    return result;
};
