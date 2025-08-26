from fastapi import APIRouter, Depends, HTTPException, Query
from bson import ObjectId
from typing import List, Optional
from app.db.client import get_db
from app.models.users import UserPublic

router = APIRouter(prefix="/api/users", tags=["users"])

def to_public(doc) -> UserPublic:
    return UserPublic(id=str(doc["_id"]), email=doc["email"], name=doc.get("name"))

@router.get("", response_model=List[UserPublic])
async def list_users(
    db = Depends(get_db),
    q: Optional[str] = Query(default=None, description="search by email substring"),
    limit: int = 50,
    skip: int = 0,
):
    filt = {}
    if q:
        filt = {"email": {"$regex": q, "$options": "i"}}
    cursor = db.users.find(filt, projection={"password_hash": 0}).skip(skip).limit(limit).sort("_id", -1)
    return [to_public(d) async for d in cursor]

@router.get("/{user_id}", response_model=UserPublic)
async def get_user(user_id: str, db = Depends(get_db)):
    try:
        _id = ObjectId(user_id)
    except Exception:
        raise HTTPException(400, "Invalid user id")
    doc = await db.users.find_one({"_id": _id}, projection={"password_hash": 0})
    if not doc:
        raise HTTPException(404, "User not found")
    return to_public(doc)

@router.get("/by-email/{email}", response_model=UserPublic)
async def get_user_by_email(email: str, db = Depends(get_db)):
    doc = await db.users.find_one({"email": email.lower().strip()}, projection={"password_hash": 0})
    if not doc:
        raise HTTPException(404, "User not found")
    return to_public(doc)
