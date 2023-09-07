import random
from .file import get_json_from_file


def get_keywords():
    keywords = []
    positive_prompts = get_json_from_file("./data/positive_prompts.json")

    for prompt in positive_prompts:
        split_prompt = prompt.split(",")
        prompt_keywords = [p.strip() for p in split_prompt]
        keywords.extend(prompt_keywords)

    keyword_median = len(keywords) // len(positive_prompts)
    random_keywords = random.sample(keywords, keyword_median)
    return random_keywords
