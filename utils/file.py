import json


def get_json_from_file(file_location: str) -> dict:
    with open(file_location) as f:
        file_content = f.read()
        return json.loads(file_content)
