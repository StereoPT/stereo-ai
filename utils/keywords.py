import random
from .file import get_json_from_file


def get_keywords(amount: int):
    keywords = []
    positive_prompts = get_json_from_file("./data/positive_prompts.json")

    for prompt in positive_prompts:
        prompt_keywords = [p.strip() for p in prompt.split(",")]
        keywords.extend(prompt_keywords)

    random_keywords = random.sample(keywords, amount)
    return random_keywords
