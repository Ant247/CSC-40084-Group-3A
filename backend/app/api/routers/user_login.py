from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from app.db.client import get_db
from app.core.security import verify_password

router = APIRouter(prefix="/api/users", tags=["users"])

class LoginBody(BaseModel):
    email: EmailStr
    password: str

@router.post("/login")
async def login(body: LoginBody, db=Depends(get_db)):
    email = body.email.lower().strip()
    user = await db.users.find_one({"email": email})
    console.log(user)
    if not user or "password" not in user:       
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if not verify_password(body.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")  
    return {
        "ok": True,
        "user": {
            "id": str(user["_id"]),
            "email": user["email"],
            "name": user.get("name")
        }
    }
