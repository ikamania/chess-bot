import { useEffect, useState } from "react"
import { getState, makeMove, resetGame } from "../services/api"


export function useGame() {
  const [state, setState] = useState<any>(null)

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const data = await getState()
    setState(data)
  }

  async function move(move: string) {
    const data = await makeMove(move)
    setState(data.state)
  }

  async function reset() {
    const data = await resetGame()
    setState(data)
  }

  return {
    state,
    move,
    reset,
  }
}
