const API_URL = "http://localhost:8000"


export async function getState() {
  const response = await fetch(`${API_URL}/state`)

  return response.json()
}


export async function makeMove(move: string) {
}


export async function resetGame() {
  const response = await fetch(`${API_URL}/reset`, {
    method: "POST",
  })

  return response.json()
}
