
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