const PIECES_ASSET_PATH = "/pieces/"


type Props = {
  isDark: boolean
  piece: string | null
}


export default function Square({ isDark, piece }: Props) {
  return (
    <div
      className={`w-[5rem] h-[5rem] flex items-center justify-center ${
        isDark ? "bg-[#769656]" : "bg-[#eeeed2]"
      }`}
    >
      {piece && (
        <img src={`${PIECES_ASSET_PATH}${piece}.png`} className="w-4/5 h-4/5" />
      )}
    </div>
  )
}
