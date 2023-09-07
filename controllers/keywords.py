from schemas.prompt import Prompt
from utils.repository import Repository


class Keywords:
    def __init__(self) -> None:
        self.repository = Repository("keywords")

    def get_all(self):
        return self.repository.get_all()

    def create(self, prompt: Prompt):
        prompt = Prompt(**prompt.model_dump())
        split_prompt = prompt.prompt.split(",")
        prompt_keywords = [p.strip() for p in split_prompt]

        keywords = self.repository.save_many(elems=prompt_keywords)
        return keywords
