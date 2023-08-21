import glob
import random

from os import path

MODELS = [
    "Realistic Vision V5.1",
    "DreamShaper 8",
    "Perfect World v5",
    "MeinaHentai",
]

models_directory = "/Users/guidopereira/Downloads"


def get_models_from_folder():
    models_pattern = path.join(models_directory, "*.safetensors")
    model_files = glob.glob(models_pattern)

    return model_files


def get_random_model():
    models = []
    if models_directory is not None:
        folder_models = get_models_from_folder()
        models.extend(folder_models)

    if len(models) <= 0:
        models.extend(MODELS)

    random_model = random.choice(models)

    return random_model
