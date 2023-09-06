import json
import random


def get_model():
    with open("./data/models.json") as f:
        content = f.read()
        content_dict = json.loads(content)

        random_model = random.choice(content_dict)
        return random_model
