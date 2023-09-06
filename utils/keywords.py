import json


def get_keywords():
    keywords = []
    with open("./data/positive_prompts.json") as f:
        file_contents = f.read()
        content_dict = json.loads(file_contents)

        for prompt in content_dict:
            prompt_keywords = [p.strip() for p in prompt.split(",")]
            keywords.extend(prompt_keywords)

        return keywords
