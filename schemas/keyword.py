from pydantic import BaseModel


class Keyword(BaseModel):
    keyword: str


class Keywords(BaseModel):
    keywords: list[Keyword]
