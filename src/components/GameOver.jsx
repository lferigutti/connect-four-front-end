export default function GameOver({winner, onRematchClick}) {
    return (
        <div className="absolute mt-0 ml-0 w-full h-full flex  flex-col text-center bg-gray-950 bg-opacity-90">
            <h1 className="text-6xl text-center">Game Over</h1>
            <p className="text-xl font-semibold text-center mt-6">Player {winner} Won!</p>
            <p className="text-xl text-center mt-6">
                <button className="border-2 rounded p-2 bg-cyan-950 hover:bg-cyan-800 border-sky-950"
                        onClick={onRematchClick}> Rematch </button>
            </p>
        </div>
    )
}