from fastapi import APIRouter, Depends
from app.db.client import get_db

router = APIRouter(prefix="/api", tags=["health"])

@router.get("/healthz")
async def healthz():
    return {"ok": True}

@router.get("/healthz/db")
async def healthz_db(db = Depends(get_db)):
    # Atlas ping
    await db.command("ping")
    return {"ok": True}
