export const checkIfThereAWinner = ( board ) => {

    const result = checkVerticalWin(board)
        || checkHorizontalWin(board)
        || checkDiagonalRightWin(board)
        || checkDiagonalLeftWin(board)
        
    return result;

}

export const checkVerticalWin = ( board ) => {
    
    return false;

}

export const checkHorizontalWin = ( board ) => {

    return false;

}

export const checkDiagonalRightWin = ( board ) => {

    return false;

}

export const checkDiagonalLeftWin = ( board ) => {

    return false;

}

export const checkIsBoarIsFull = ( board ) => {

    return false;

}
