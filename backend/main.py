from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="B2B Market API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserRegister(BaseModel):
    name: str
    email: str
    password: str
    role: str = "buyer"

class UserLogin(BaseModel):
    email: str
    password: str

users = []
products = [
    {"id": 1, "name": "Томатная паста", "price": 480, "unit": "кг", "icon": "🥫", "category": "Консервация"},
    {"id": 2, "name": "Подсолнечное масло", "price": 1200, "unit": "л", "icon": "🧴", "category": "Масла"},
    {"id": 3, "name": "Рис длиннозерный", "price": 320, "unit": "кг", "icon": "🌾", "category": "Крупы"},
    {"id": 4, "name": "Мука пшеничная", "price": 180, "unit": "кг", "icon": "🌾", "category": "Крупы"},
    {"id": 5, "name": "Сахар белый", "price": 260, "unit": "кг", "icon": "🧂", "category": "Бакалея"},
    {"id": 6, "name": "Соль поваренная", "price": 80, "unit": "кг", "icon": "🧂", "category": "Специи"},
]

@app.get("/")
def root():
    return {"message": "B2B Market API работает!"}

@app.get("/products")
def get_products():
    return products

@app.post("/auth/register")
def register(user: UserRegister):
    if any(u["email"] == user.email for u in users):
        return {"detail": "Пользователь с таким email уже существует"}
    new_user = {"id": len(users) + 1, "name": user.name, "email": user.email, "role": user.role}
    users.append(new_user)
    return {"message": "Регистрация успешна!", "user": new_user}

@app.post("/auth/login")
def login(user: UserLogin):
    found = next((u for u in users if u["email"] == user.email), None)
    if not found:
        return {"detail": "Пользователь не найден"}
    return {"access_token": "fake-token-123", "user": found}