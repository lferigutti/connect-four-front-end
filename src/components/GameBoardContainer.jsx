import GameBoard from "./GameBoard.jsx";
import {useRef, useState} from "react";
import {
    getWinner,
    checkNoMoveAvailable,
    checkWinnerMove,
    getNewBoard,
    getNextRowAvailable,
    initGameBoard
} from "../gameLogic.js";
import Player from "./Player.jsx";
import GameOver from "./GameOver.jsx";


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
    const dialog = useRef();

    function handleNextPlayer(currentPlayerCopy){
        setCurrentPlayer(()=> {
            if (currentPlayerCopy === 1) {
                return 2;
            } else return 1;
        })
    }

    function handleRematch (){
        const emptyBoard = initGameBoard(ROW_COUNTER, COLUMN_COUNTER)
        const currentPlayerCopy = currentPlayer
        setGameBoard(emptyBoard)
        setWinner(undefined)
        handleNextPlayer(currentPlayerCopy)
    }

    function handleGameOver(winner) {
        setWinner(winner)
        dialog.current.showModal();
    }


    function handleClickOnGameBoard(colIndex) {
        const currentPlayerCopy = currentPlayer
        const prevBoard = [...gameBoard.map(innerArray => [...innerArray])];
        const nextRowAvailable = getNextRowAvailable(prevBoard, colIndex)

        if (nextRowAvailable >= 0) {
            const newBoard = getNewBoard(prevBoard, nextRowAvailable, colIndex, currentPlayerCopy)
            setGameBoard(()=>newBoard)
            const winnerPlayer = getWinner(newBoard, currentPlayerCopy)
            {winnerPlayer? handleGameOver(winnerPlayer):
                handleNextPlayer(currentPlayerCopy);
            }
        }

    }
 return (
     <div className="flex flex-col items-center">
         <div className="flex justify-evenly w-full p-5">
             <Player
                 name={PLAYERS.playerOne.name}
                 pieceColor={PLAYERS.playerOne.colorPiece}
                 isActive={PLAYERS.playerOne.piece === currentPlayer}
             />
             <Player
                 name={PLAYERS.playerTwo.name}
                 pieceColor={PLAYERS.playerTwo.colorPiece}
                 isActive={PLAYERS.playerTwo.piece === currentPlayer}
             />

         </div>
         <div className="justify-center items-center">
             <GameBoard
                 gameBoard={gameBoard}
                 onClickBoard={handleClickOnGameBoard}
                 winner={winner}
                 playersInfo={PLAYERS}
             />
         </div>
         <GameOver winner={winner} onRematchClick={handleRematch} ref={dialog} />
     </div>
 )
}