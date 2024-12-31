import {createPortal} from "react-dom";

export default function GameOver({winner, onRematchClick, ref}) {
    const tie = winner === -1;

    return createPortal(
        <dialog className="border p-8 border-sky-950 bg-zinc-950 text-zinc-50 backdrop:bg-zinc-950 backdrop:bg-opacity-65" ref={ref}>
            <h1 className="text-6xl text-center">Game Over</h1>
            <p className="text-xl font-semibold text-center mt-6">{tie? "It's a Draw": "Player " + winner + " Won!"}</p>
            <div className="text-xl text-center mt-6 justify-evenly" >
                <form method="dialog">
                    <button className="border-2 rounded p-2 bg-cyan-950 hover:bg-cyan-800 border-sky-950"
                            onClick={onRematchClick}> Rematch
                    </button>
                    <button className="ml-5 border-2  rounded p-2  hover:bg-sky-950 border-sky-950">Close</button>
                </form>
            </div>

        </dialog>,
        document.getElementById("modal")
    )
}