import random

from .file import get_json_from_file


def get_model():
    models = get_json_from_file("./data/models.json")

    random_model = random.choice(models)
    return random_model


# def get_models_from_folder(models_directory):
#     models_pattern = path.join(models_directory, "*.safetensors")
#     model_file_paths = glob.glob(models_pattern)
#     model_files = [Path(model_path).stem for model_path in model_file_paths]
#     return model_files
