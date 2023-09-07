from utils.keywords import get_keywords
from utils.models import get_model


class Generation:
    def __init__(self) -> None:
        self.model = get_model()
        self.keywords = get_keywords()

    def generate(self) -> None:
        print(", ".join(self.keywords))
        return {"model": self.model, "keywords": self.keywords}
