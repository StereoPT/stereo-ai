from fastapi import FastAPI
from fastapi.responses import RedirectResponse

from routes import generation


app = FastAPI()

# Add Middlewares


@app.get("/")
def docs():
    return RedirectResponse("/docs")


app.include_router(generation.router)
