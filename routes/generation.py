from fastapi import APIRouter


router = APIRouter(prefix="/generations", tags=["Generations"])


@router.get("/new")
def get_new():
    return "New Generation"
