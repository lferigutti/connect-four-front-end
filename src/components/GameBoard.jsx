import {useState} from "react";
import {checkWinnerMove, getNewBoard, getNextRowAvailable} from "../gameLogic.js"
import Piece from "./Piece.jsx";


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
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

function transposeBoard(board) {
    return board[0].map((_, colIndex) => board.map(row => row[colIndex]));
}

export default function GameBoard() {
    //const gameBoard = initGameBoard(ROW_COUNTER, COLUMN_COUNTER);
    //const gameBoard = DUMMY_BOARD
    const [gameBoard, setGameBoard] = useState(DUMMY_BOARD)
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [winner, setWinner] = useState(undefined)

    function handleNextPlayer(currentPlayerCopy){
        setCurrentPlayer(()=> {
            if (currentPlayerCopy === 1) {
                return 2;
            } else return 1;
        })
    }


    function handleClickOnGameBoard(colIndex) {
        const currentPlayerCopy = currentPlayer
        const prevBoard = [...gameBoard.map(innerArray => [...innerArray])];
        const nextRowAvailable = getNextRowAvailable(prevBoard, colIndex)
        if (nextRowAvailable >= 0) {
            const newBoard = getNewBoard(prevBoard, nextRowAvailable, colIndex, currentPlayerCopy)
            setGameBoard(()=>newBoard)
            const isThereAWinner = checkWinnerMove(newBoard,currentPlayerCopy)
            {isThereAWinner? setWinner(currentPlayerCopy): handleNextPlayer(currentPlayerCopy)}
        }
    }

    return (
            <div className="flex flex-col items-center bg-sky-600">
               <div className="flex">
                   {transposeBoard(gameBoard).map((col, colIndex) => (
                       <div key={colIndex} className="flex flex-col">
                           <button onClick={()=>handleClickOnGameBoard(colIndex)} className='hover:bg-sky-800' disabled={!!winner}>
                                   {col.map((piece, rowIndex) => (
                                    <Piece key={`${colIndex}-${rowIndex}`} piece={piece} />
                                   ))}
                           </button>
                   </div>))}
               </div>
                <p>{winner && "There is a winner"}</p>
            </div>

    )
}