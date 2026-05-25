const PIECES_ASSET_PATH = "/pieces/"


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
        <img src={`${PIECES_ASSET_PATH}${piece}.png`} className="w-8/9 h-8/9" />
      )}
    </div>
  )
}
