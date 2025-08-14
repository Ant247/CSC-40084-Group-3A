from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], allow_credentials=True,
    allow_methods=["*"], allow_headers=["*"],
)

client = AsyncIOMotorClient(os.getenv("MONGO_URI"))
db = client["mydb"]
todos = db["todos"]

class TodoIn(BaseModel):
    title: str
    done: bool = False

@app.get("/api/todos")
async def list_todos():
    return [ {**t, "_id": str(t["_id"])} async for t in todos.find() ]

@app.post("/api/todos")
async def create(todo: TodoIn):
    res = await todos.insert_one(todo.model_dict())
    return {"_id": str(res.inserted_id), **todo.model_dump()}

@app.patch("/api/todos/{id}")
async def toggle(id: str):
    from bson import ObjectId
    ok = await todos.update_one({"_id": ObjectId(id)}, {"$bit": {"done": {"xor": 1}}})
    if ok.matched_count == 0: raise HTTPException(404, "Not found")
    t = await todos.find_one({"_id": ObjectId(id)})
    return {**t, "_id": str(t["_id"])}
