import Piece from "./Piece"


type Props = {
  isDark: boolean
  piece: string | null
}


export default function Square({ isDark, piece }: Props) {
  return (
    <div
      className={`w-[5rem] h-[5rem] flex items-center justify-center ${
        isDark ? "bg-[#739552]" : "bg-[#ebecd0]"
      }`}
    >
      {piece && (
        <Piece piece={piece} />
      )}
    </div>
  )
}
