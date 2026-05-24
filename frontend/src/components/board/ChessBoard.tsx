import { useGame } from "../../hooks/useGame"


export default function ChessBoard() {
  const { state, move } = useGame()

  if (!state) return <></>

  return (
    <>FEN: {state.fen}</>
  )
}
