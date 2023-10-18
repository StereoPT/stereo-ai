from schemas import Prompt
from controllers import Keywords
from fastapi import APIRouter


router = APIRouter(prefix="/keywords", tags=["Keywords"])


@router.post("/")
def create_keywords(body: Prompt):
    keywords = Keywords()
    saved_keywords = keywords.create(prompt=body)
    return saved_keywords
