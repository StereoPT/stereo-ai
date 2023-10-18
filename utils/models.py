import json
import random


def get_model():
    with open("./data/models.json", "r") as f:
        file_content = f.read()
        models = json.loads(file_content)
        random_model = random.choice(models)
        return random_model
