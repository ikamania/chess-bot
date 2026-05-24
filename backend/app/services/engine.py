START_FEN = "startpos"

state: dict[str, str | list[str]] = {
    "fen": START_FEN,
    "history": []
}


def get_state():
    return state


def reset_game():
    state["fen"] = START_FEN
    state["history"] = []

    return state


def make_move(player_move: str):
    pass
