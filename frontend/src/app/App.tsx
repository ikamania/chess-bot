import ChessBoard from "../components/board/ChessBoard"
import { useGame } from "../hooks/useGame"


function App() {
  const { board, state } = useGame()

  if (!board || !state) return "No board provided"

  return (
    <div className="pt-[2rem] pl-[2rem]">
      <ChessBoard board={board} orientation={state.yourColor}/>
    </div>
  )
}

export default App
