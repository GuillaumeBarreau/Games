export const generateBoard = ( valueRow, valueCol ) => {

  const board = (row, col) => {
    const initBoard = [];
    
    for (let r = 0; r < row; r++) {
      initBoard[r] = [];
      for (let c = 0; c < col; c++) {
        initBoard[r][c] = "";
      }
    };
    
    return initBoard
  }
  return board(valueRow, valueCol)
}
