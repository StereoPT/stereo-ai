import uvicorn

from fastapi import FastAPI
from fastapi.responses import RedirectResponse

from .routes import generation


app = FastAPI()

# Add Middlewares


@app.get("/")
def docs():
    return RedirectResponse("/docs")


app.include_router(generation.router)


def start():
    """Launched with `poetry run dev` at root level"""
    uvicorn.run("src.main:app", host="0.0.0.0", port=8000, reload=True)
