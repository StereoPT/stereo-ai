from schemas import Prompt
from controllers import Keywords
from fastapi import APIRouter


router = APIRouter(prefix="/keywords", tags=["Keywords"])


@router.get("/")
def get_keywords():
    keywords = Keywords()
    return keywords.get_all()


@router.post("/")
def create_keywords(body: Prompt):
    keywords = Keywords()
    saved_keywords = keywords.create(prompt=body)
    return saved_keywords
