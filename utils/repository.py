import json
from os import path
from pydantic import BaseModel


class Repository:
    def __init__(self, repo_name: str) -> None:
        self.key = (repo_name).lower()
        self.store = path.join(".", "repositories", f"{self.key}.json")
        self.items: dict = {}
        if path.exists(self.store):
            with open(self.store, "r") as store_file:
                self.items = json.load(store_file)

    def save(self, elem: BaseModel) -> BaseModel:
        repository_key: list = self.items[self.key]
        repository_key.extend(elem)
        self.items[self.key] = list(set(repository_key))
        self._persist()
        return elem

    def save_many(self, elems: list[BaseModel]) -> list[BaseModel]:
        repository_key: list = self.items[self.key]
        repository_key.extend(elems)
        self.items[self.key] = list(set(repository_key))
        self._persist()
        return elems

    def _persist(self):
        with open(self.store, "w+") as store_file:
            store_file.write(json.dumps(self.items))
