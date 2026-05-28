import type { Board } from "./board"
import { isValidMove } from "./rules"


export function  movePiece(
  board: Board,
  from: [number, number],
  to: [number, number]
): Board | null {
  console.log("movePiece")

  if (!isValidMove(board, from, to)) {
    return null
  }
}
