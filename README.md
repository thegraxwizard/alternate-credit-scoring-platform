# 🏦 Alternative Credit Scoring Platform

A full-stack FinTech web application that generates alternative credit scores for credit-invisible users (students, freelancers, gig workers) based on their financial behavior.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)

---

## 📁 Project Structure

```
creditscoring/
├── backend/          ← Node.js + Express API
│   ├── server.js
│   ├── config/db.js
│   ├── models/
│   │   ├── User.js
│   │   └── FinancialData.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── financial.js
│   │   └── admin.js
│   ├── middleware/auth.js
│   ├── seedAdmin.js
│   └── .env.example
└── frontend/         ← React.js app
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── index.css
    │   ├── context/AuthContext.js
    │   ├── utils/api.js
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   └── PrivateRoute.js
    │   └── pages/
    │       ├── Login.js
    │       ├── Register.js
    │       ├── Dashboard.js
    │       ├── FinancialData.js
    │       ├── CreditScore.js
    │       └── AdminDashboard.js
    └── public/index.html
```

---

## ⚙️ Backend Setup

```bash
cd backend

# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env
# Edit .env and set your MONGO_URI

# 3. Seed the admin account
node seedAdmin.js

# 4. Start the server
npm run dev       # development (nodemon)
# or
npm start         # production
```

The backend runs on **http://localhost:5000**

---

## 💻 Frontend Setup

```bash
cd frontend

# 1. Install dependencies
npm install

# 2. Start React app
npm start
```

The frontend runs on **http://localhost:3000**

> The `"proxy": "http://localhost:5000"` in package.json automatically forwards `/api` calls to the backend.

---

## 🔐 Default Admin Login

```
Email:    admin@credit.com
Password: admin123
```

---

## 📡 API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/auth/register` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login & get JWT |
| GET | `/api/auth/me` | User | Get current user |
| POST | `/api/financial/submit` | User | Submit financial data |
| GET | `/api/financial/score` | User | Get credit score |
| GET | `/api/admin/users` | Admin | List all users |
| GET | `/api/admin/users/:id` | Admin | Get user detail |

---

## 🧠 Credit Score Algorithm

```
Score = (Income × 0.4) + (Savings × 0.3) + (Bill Payments × 0.3)

All components normalized to 0–1000 scale.

Risk Classification:
  700–1000 → Low Risk    (strong creditworthiness)
  500–699  → Medium Risk (moderate creditworthiness)
  <500     → High Risk   (needs improvement)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, React Router v6, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (JSON Web Tokens) + bcrypt |
| Styling | Custom CSS (no framework) |

---

## 👥 Scrum Team
- **Product Owner**: Jaudath
- **Scrum Master**: Praveen
- **Developer**: Sahi

---

## 🔮 Future Enhancements
- AI/ML-based scoring model
- Real bank API integration
- Mobile app (React Native)
- OAuth / Google login
- Email verification
