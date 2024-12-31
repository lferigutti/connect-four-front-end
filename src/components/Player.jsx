export default function Player({name, pieceColor, isActive}) {
    return (
        <>
        <span className={`font-semibold text-center items-center p-2 rounded ${
            isActive ? pieceColor : ''
        }`}>
            {name}
        </span>
        </>
    )
}