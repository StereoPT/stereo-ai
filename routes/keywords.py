from fastapi import APIRouter

from keywords import Keyword

router = APIRouter(prefix="/keywords", tags=["Keywords"])


@router.get("/")
def get_keywords():
    return "Get Keywords"


@router.post("/")
def create_keywords():
    return "Create Keywords"


@router.put("/{keyword}")
def update_keyword(keyword: str):
    return "Update Keyword"


@router.delete("/{keyword}")
def delete_keyword(keyword: str):
    return "Delete Keyword"
