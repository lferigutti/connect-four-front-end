import GameBoard from "./GameBoard.jsx";

export function GameBoardContainer() {
 return (
     <div className="h-5/6 w-6/12 flex flex-col items-center border-2 border-sky-950">
         <p>Game Board Container</p>
         <div className="mt-6">
             <GameBoard />
         </div>
     </div>
 )
}