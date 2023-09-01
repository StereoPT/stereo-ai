import glob
import random

from os import path
from pathlib import Path

MODELS = [
    "Realistic Vision V5.1",
    "DreamShaper 8",
    "Perfect World v5",
    "MeinaHentai",
]


def get_models_from_folder(models_directory):
    models_pattern = path.join(models_directory, "*.safetensors")
    model_file_paths = glob.glob(models_pattern)
    model_files = [Path(model_path).stem for model_path in model_file_paths]

    return model_files


def get_random_model(models_directory):
    models = []
    if len(models_directory) > 0:
        folder_models = get_models_from_folder(models_directory)
        models.extend(folder_models)

    if len(models) <= 0:
        models.extend(MODELS)

    random_model = random.choice(models)

    return random_model
