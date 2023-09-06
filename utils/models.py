import random

from .file import get_json_from_file


def get_model():
    models = get_json_from_file("./data/models.json")

    random_model = random.choice(models)
    return random_model
