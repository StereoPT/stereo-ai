from fastapi import APIRouter

from controllers import Generations

router = APIRouter(prefix="/generations", tags=["Generations"])


@router.get("/")
def get_new():
    generation = Generations()
    return generation.generate(0)
