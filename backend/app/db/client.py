from functools import lru_cache
from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

@lru_cache
def get_client() -> AsyncIOMotorClient:
    return AsyncIOMotorClient(settings.MONGO_URI)

def get_db():
    return get_client()[settings.DB_NAME]
