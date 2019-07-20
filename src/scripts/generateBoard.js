const generateBoard = (valueRow, valueCol) => {
    const board = (row, col) => {
        const initBoard = [...Array(row)].map(() => {
            let rows = [];

            rows = [...Array(col)].map(() => '');

            return rows;
        });

        return initBoard;
    };

    return board(valueRow, valueCol);
};

export default generateBoard;
