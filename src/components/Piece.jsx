

// eslint-disable-next-line react/prop-types
export default function Piece({piece, props}){
    return (
        <div {...props}
             className={`flex h-20 w-20 border-4 border-sky-600 rounded-full 
             ${
                 piece === 0 ? "bg-gray-950" : piece === 1 ? "bg-green-400" : "bg-yellow-400"
             }`
             }>
        </div>
    )
}