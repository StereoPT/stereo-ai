from fastapi import APIRouter

from generations import Generation

router = APIRouter(prefix="/generations", tags=["Generations"])


@router.get("/new")
def get_new():
    generation = Generation()
    return generation.generate()
