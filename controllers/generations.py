import random
from controllers import Keywords
from utils.models import get_model


class Generations:
    def __init__(self) -> None:
        self.model = get_model()
        self.keywords = Keywords().get_all()
        self.keyword_amount = 20

    def generate(self, keyword_offset) -> None:
        sample_amount = self.keyword_amount + random.randint(0, keyword_offset)
        random_keywords = random.sample(self.keywords, sample_amount)

        print(", ".join(random_keywords))
        return {"model": self.model, "keywords": random_keywords}
