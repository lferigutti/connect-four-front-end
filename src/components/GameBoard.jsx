import Piece from "./Piece.jsx";

function transposeBoard(board) {
    return board[0].map((_, colIndex) => board.map(row => row[colIndex]));
}

export default function GameBoard({gameBoard, onClickBoard, winner, playersInfo}) {

    return (
            <div className="flex flex-col items-center bg-sky-600">
               <div className="flex">
                   {transposeBoard(gameBoard).map((col, colIndex) => (
                       <div key={colIndex} className="flex flex-col">
                           <button onClick={()=>onClickBoard(colIndex)} className='hover:bg-sky-800' disabled={!!winner}>
                                   {col.map((piece, rowIndex) => (
                                    <Piece key={`${colIndex}-${rowIndex}`} piece={piece} playersData={playersInfo}  />
                                   ))}
                           </button>
                   </div>))}
               </div>
                <p>{winner && "Winner Player" + winner }</p>
            </div>

    )
}