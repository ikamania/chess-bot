const PIECES_ASSET_PATH = "/pieces/"

type Props = {
  piece: string
}

export default function Piece({ piece }: Props) {
  return (
    <img src={`${PIECES_ASSET_PATH}${piece}.png`} className="w-8/9 h-8/9 select-none pointer-events-none" />
  )
}
