import random
from utils.models import get_model


class Generations:
    def __init__(self) -> None:
        self.model = get_model()
        self.keyword_amount = 20

    def generate(self, keyword_offset) -> None:
        sample_amount = self.keyword_amount + random.randint(0, keyword_offset)
        random_keywords = random.sample(self.keywords, sample_amount)
        prompt = ", ".join(random_keywords)

        return {"model": self.model, "prompt": prompt, "keywords": random_keywords}
