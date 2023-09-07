from fastapi import FastAPI
from fastapi.responses import RedirectResponse

from routes import generations, keywords


app = FastAPI()

# Add Middlewares


@app.get("/")
def docs():
    return RedirectResponse("/docs")


app.include_router(generations.router)
app.include_router(keywords.router)
