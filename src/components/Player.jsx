export default function Player({name, pieceColor}) {
    return (
        <>
        <span className="font-semibold text-center items-center">
            {name}
        </span>
            <div>{pieceColor}</div>

        </>
    )
}