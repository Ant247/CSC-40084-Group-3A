from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MONGO_URI: str
    DB_NAME: str = "BMI2"
    ALLOWED_ORIGINS: str = "http://localhost:5173" 
    class Config:
        env_file = ".env"

settings = Settings()
