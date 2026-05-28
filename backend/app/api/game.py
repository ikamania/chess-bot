from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class MoveRequest(BaseModel):
    move: str


@router.get("/state")
def state():
    return {
        "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        "yourColor": "white"
    }


@router.post("/move")
def move():
    pass


@router.post("/reset")
def reset():
    pass
