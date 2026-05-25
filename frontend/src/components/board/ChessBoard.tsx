import { useGame } from "../../hooks/useGame"
import { parseFEN } from "../../utils/fen"
import Square from "./Square"


export default function ChessBoard() {
  const { state, move } = useGame()

  if (!state) return null

  const board = parseFEN(state)

  return (
    <div className="w-fit border">
      {board.map((row, r) => (
        <div key={r} className="flex">
          {row.map((piece, c) => {
            const isDark = (r + c) % 2 === 1;

            return (
              <Square
                key={`${r}-${c}`}
                isDark={isDark}
                piece={piece || null}
              />
            );
          })}
        </div>
      ))}
    </div>
  )
}
