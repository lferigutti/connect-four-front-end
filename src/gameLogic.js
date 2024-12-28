
// Get next Row Available from the bottom to the top if not returns -1
export function getNextRowAvailable(board, colIndex){
    const numberOfRows = board.length
    for (let row= numberOfRows - 1; row >= 0; row--) {
        if (board[row][colIndex] === 0){
            return row
        }
    }
    return -1
}


export function getNewBoard(board, row, col, piece) {
    const boardCopy = [...board.map(innerArray => [...innerArray])];
    boardCopy[row][col] = piece;
    return boardCopy
}


export function checkWinnerMove(board, player){
    const rowCount = board.length;
    const colCount = board[0].length;

    // Horizontal Winning
    for (let c=0; c <= colCount-3; c++) {
        for (let r=0; r < rowCount; r++) {
            if (board[r][c] === player && board[r][c+1] === player && board[r][c+2] === player && board[r][c+3] === player) {
                return true;
            }
        }
    }
    // Vertical Winning
    for (let r=3; r < rowCount; r++) {
        for (let c=0; c < colCount; c++) {
            if (board[r][c] === player && board[r-1][c] === player && board[r-2][c] === player && board[r-3][c] === player) {
                return true;
            }
        }
    }

    // Positive Diagonal Winning
    for (let r=3; r < rowCount; r++) {
        for (let c=0; c <= colCount-3; c++) {
            if (board[r][c] === player && board[r-1][c+1] === player && board[r-2][c+2] === player && board[r-3][c+3] === player) {
                return true;
            }
        }
    }

    // Negative Diagonal Winning
    for (let r=0; r <= rowCount-4; r++) {
        for (let c=0; c <= colCount; c++) {
            if (board[r][c] === player && board[r+1][c+1] === player && board[r+2][c+2] === player && board[r+3][c+3] === player) {
                return true;
            }
        }
    }
    return false;
}

export function initGameBoard(row_count ,col_count ) {
    const board = []
    for (let i = 0; i < row_count; i++) {
        const row = []
        for (let j = 0; j < col_count; j++) {
            row.push(0)
        }
        board.push(row)
    }
    return board
}