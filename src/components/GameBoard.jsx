import log from "eslint-plugin-react/lib/util/log.js";

const ROW_COUNTER = 6
const COLUMN_COUNTER = 7

function initGameBoard(row_count ,col_count ) {
    const board = []
    for (let i = 0; i < row_count; i++) {
        const row = []
        for (let j = 0; j < col_count; j++) {
            row.push(null)
        }
        board.push(row)
    }
    return board
}

const DUMMY_BOARD = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,2,0,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0],
    [1,0,0,0,0,0,2],
]

function transposeBoard(board) {
    return board[0].map((_, colIndex) => board.map(row => row[colIndex]));
}

export default function GameBoard() {
    //const gameBoard = initGameBoard(ROW_COUNTER, COLUMN_COUNTER);
    //const gameBoard = DUMMY_BOARD
    const transposedGameBoard = transposeBoard(DUMMY_BOARD);
    return (

            <div className="flex flex-col items-center bg-sky-600">
               <div className="flex">
                   {transposedGameBoard.map((col, colIndex) => (
                       <div key={colIndex} className="flex flex-col">
                           <button onClick={()=>console.log(colIndex)} className='hover:bg-sky-800'>
                                   {col.map((coin, rowIndex) => (
                                       <div key={`${colIndex}-${rowIndex}`}
                                            className={`flex h-20 w-20 border-4 border-sky-600 rounded-full 
                                            ${
                                                coin === 0 ? "bg-gray-950" : coin === 1 ? "bg-green-400" : "bg-yellow-400"
                                            }`
                                       }>
                                       </div>
                                   ))}
                           </button>
                   </div>))}
               </div>
            </div>

    )
}