import { useEffect, useState } from "react"
import { getState, makeMove, resetGame } from "../services/api"
import { parseFEN } from "../utils/fen.ts"
import type { Board } from "../engine/board"


type GameState = {
  fen: string
  yourColor: "white" | "black"
}


export function useGame() {
  const [state, setState] = useState<GameState | null>(null)

  useEffect(() => {
    load()
  }, [])

  const board: Board | null = state?.fen ? parseFEN(state.fen) : null

  async function load() {
    const data = await getState()
    setState(data)
  }

  async function playMove(uci: string) {
    const data = await makeMove(uci)
    setState(data.state)
  }

  async function reset() {
    const data = await resetGame()
    setState(data)
  }

  return {
    state,
    board,
    playMove,
    reset,
  }
}
