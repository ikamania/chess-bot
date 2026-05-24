from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class MoveRequest(BaseModel):
    move: str


@router.get("/state")
def state():
    pass


@router.post("/move")
def move():
    pass


@router.post("/reset")
def reset():
    pass
