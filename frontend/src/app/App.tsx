import ChessBoard from "../components/board/ChessBoard"
import { useGame } from "../hooks/useGame"


function App() {
  const { board } = useGame()

  if (!board) return "No board provided"

  return (
    <div className="pt-[2rem] pl-[2rem]">
      <ChessBoard board={board} />
    </div>
  )
}

export default App
