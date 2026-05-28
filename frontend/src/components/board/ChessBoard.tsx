import { useState } from "react"
import { useGame } from "../../hooks/useGame"
import { parseFEN } from "../../utils/fen"
import Square from "./Square"
import Piece from "./Piece"
import type { Board } from "./board"
import { movePiece } from "../../engine/move"
import { useChessDrag } from "../../hooks/useChessDrag"



export default function ChessBoard() {
  const { state, move } = useGame()

  const board = state?.fen ? parseFEN(state.fen) : null

  const {
    dragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    cancelDrag,
  } = useChessDrag(board)

  if (!board) return null

  return (
    <div 
      className={`w-fit border select-none relative ${dragging ? "cursor-grabbing" : " "}`}
      onPointerMove={onPointerMove}
      onPointerLeave={cancelDrag}
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
                onPointerDown={(e) => onPointerDown(e, r, c, piece)}
                onPointerUp={() => onPointerUp(r, c)}
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
