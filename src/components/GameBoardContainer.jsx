import GameBoard from "./GameBoard.jsx";
import {useState} from "react";
import {checkWinnerMove, getNewBoard, getNextRowAvailable, initGameBoard} from "../gameLogic.js";
import Player from "./Player.jsx";


const ROW_COUNTER = 6
const COLUMN_COUNTER = 7

const PLAYERS = {
    playerOne: {
        name: "Player 1",
        piece: 1,
        colorPiece: "bg-green-400"
    },
    playerTwo: {
        name: "Player 2",
        piece: 2,
        colorPiece: "bg-yellow-400"
    }
}

export function GameBoardContainer() {
    const initialBoard = initGameBoard(ROW_COUNTER,COLUMN_COUNTER)

    const [gameBoard, setGameBoard] = useState(initialBoard)
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
     <div className="h-5/6 w-6/12 flex flex-col items-center border-2 border-sky-950">
         <div className="flex justify-evenly w-full">
             <Player
                 name={PLAYERS.playerOne.name}
                 pieceColor={PLAYERS.playerOne.colorPiece}
             />
             <Player
                 name={PLAYERS.playerTwo.name}
                 pieceColor={PLAYERS.playerTwo.colorPiece}
             />

         </div>
         <div className="mt-6">
             <GameBoard
             gameBoard={gameBoard}
             onClickBoard={handleClickOnGameBoard}
             winner={winner}
             playersInfo={PLAYERS}
             />
         </div>
     </div>
 )
}