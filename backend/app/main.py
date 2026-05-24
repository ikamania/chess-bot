from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.game import router as engine_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(engine_router)
