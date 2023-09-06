from utils.keywords import get_keywords


class Generation:
    def __init__(self) -> None:
        self.keywords = get_keywords()

    def generate(self) -> None:
        return self.keywords
