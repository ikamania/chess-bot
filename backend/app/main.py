from fastapi import FastAPI
from app.api.engine import router as engine_router

app = FastAPI()

app.include_router(engine_router)
