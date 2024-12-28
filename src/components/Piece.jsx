
export default function Piece({piece, props, playersData}){

    const backgroundColor =
        piece === 0
            ? "bg-gray-950" // Default for empty pieces
            : piece === 1
                ? playersData.playerOne.colorPiece
                : playersData.playerTwo.colorPiece;

    return (
        <div {...props}
             className={`flex h-20 w-20 border-4 border-sky-600 rounded-full ${backgroundColor}`
             }>
        </div>
    )
}