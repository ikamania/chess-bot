import { useState } from "react"
import { useGame } from "../../hooks/useGame"
import { parseFEN } from "../../utils/fen"
import Square from "./Square"
import Piece from "./Piece"
import type { Board } from "./board"
import { movePiece } from "../../engine/move"


type Dragging = {
  row: number
  col: number
  piece: string
  x: number
  y: number
} | null


export default function ChessBoard() {
  const { state, move } = useGame()

  const [dragging, setDragging] = useState<Dragging>(null)


  function handlePointerDown(e: React.PointerEvent, row: number, col: number, piece: string | null) {
    if (!piece) return

    setDragging({
      row,
      col,
      piece,
      x: e.clientX,
      y: e.clientY
    })
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!dragging) return

    setDragging({
      ...dragging,
      x: e.clientX,
      y: e.clientY,
    })
  }

  function handlePointerUp(board: Board, row: number, col: number) {
    if (!dragging) return

    // calculate square with mouse coordinates

    movePiece(board, [row, col], [row, col])

    setDragging(null)
  }

  if (!state) return null

  const board: Board = parseFEN(state)

  return (
    <div 
      className={`w-fit border select-none relative ${dragging ? "cursor-grabbing" : " "}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setDragging(null)}
    >
      {board.map((row, r) => (
        <div key={r} className="flex">
          {row.map((piece, c) => {
            const isDark = (r + c) % 2 === 1;

            const hidden = dragging && dragging.row === r && dragging.col == c

            return (
              <Square
                key={`${r}-${c}`}
                isDark={isDark}
                piece={hidden ? null : piece}
                onPointerDown={(e) => handlePointerDown(e, r, c, piece)}
                onPointerUp={() => handlePointerUp(r, c)}
              />
            );
          })}
        </div>
      ))}

      {dragging && (
        <div
          className="fixed pointer-events-none"
          style={{
            left: dragging.x,
            top: dragging.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Piece piece={dragging.piece} />
        </div>
      )}
    </div>
  )
}
