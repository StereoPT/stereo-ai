import json
import random


def get_model():
    with open("./data/models.json", "r") as f:
        file_content = f.read()
        models = json.loads(file_content)
        random_model = random.choice(models)
        return random_model


# def get_models_from_folder(models_directory):
#     models_pattern = path.join(models_directory, "*.safetensors")
#     model_file_paths = glob.glob(models_pattern)
#     model_files = [Path(model_path).stem for model_path in model_file_paths]
#     return model_files
