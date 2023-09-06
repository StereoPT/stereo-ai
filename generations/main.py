import random

from utils.keywords import get_keywords
from utils.models import get_model


class Generation:
    def __init__(self) -> None:
        self.model = get_model()
        self.keywords = get_keywords()

    def generate(self) -> None:
        random_keywords = random.sample(self.keywords, 15)
        return {"model": self.model, "keywords": random_keywords}
