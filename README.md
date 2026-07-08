# OutFitO — Full-Stack E-Commerce Platform

> A secure, scalable MERN-based e-commerce platform with role-based dashboards, payment integration, and a seamless shopping experience.

---

##  Problem Statement

Most small-to-mid scale sellers need a reliable, secure, and role-flexible e-commerce platform without the overhead of enterprise solutions. **OutFitO** is a full-stack MERN e-commerce platform built to support both buyers and sellers with dedicated dashboards, secure authentication, real payment processing, and complete product/order management — from browsing to checkout to fulfillment.

---

##  Key Features

- 🔐 **Secure Authentication** — JWT-based auth + Google OAuth login
- 👥 **Role-Based Access Control** — Separate Buyer and Seller dashboards with protected routes
- 🛍️ **Product Management** — Full CRUD operations for product listings, including variants (size, color, etc.)
- 🛒 **Shopping Cart & Quantity Management** — Add/remove items, adjust quantities in real time
- 💳 **Payment Integration** — Razorpay integration for secure, real-time transactions
- 📦 **Order Management** — Order placement, tracking, and history
- 📱 **Responsive Design** — Fully responsive shopping experience across devices
- 🚀 **Live Deployment** — Deployed on Vercel with a scalable, production-ready setup

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js,Tailwind CSS / CSS framework used |
| Backend | Node.js, Express.js, RESTful APIs |
| Database | MongoDB |
| Authentication | JWT, Google OAuth |
| Payments | Razorpay |
| Deployment | Vercel |

---

##  How It Works

```
Buyer Flow: Browse Products → Add to Cart → Checkout → Razorpay Payment → Order Confirmation
Seller Flow: Login → Seller Dashboard → Add/Manage Products → Track Orders
```

[PLACEHOLDER: Replace with your actual architecture diagram or flow if different]

---

##  Getting Started

### Prerequisites
- Node.js (v[PLACEHOLDER: version] or higher)
- MongoDB (local or Atlas connection string)
- Razorpay API keys
- Google OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/[PLACEHOLDER: your-username]/outfito.git
cd outfito

# Install dependencies
npm install

# Set up environment variables (see below)
cp .env.example .env

# Run the development server
npm run dev
```

Visit `http://localhost:3000` (or your configured port) to view the app.

### Environment Variables

Create a `.env` file with the following:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
[PLACEHOLDER: any other env vars used]
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | User registration (Buyer/Seller) |
| POST | `/api/auth/login` | User login (JWT/Google OAuth) |
| GET | `/api/products` | Fetch all products |
| POST | `/api/products` | Add a new product (Seller only) |
| PUT | `/api/products/:id` | Update a product (Seller only) |
| DELETE | `/api/products/:id` | Delete a product (Seller only) |
| POST | `/api/cart` | Add item to cart |
| POST | `/api/orders` | Place an order |
| POST | `/api/payment/create` | Create Razorpay payment order |
| POST | `/api/payment/verify` | Verify payment signature |

*(⚠️ PLACEHOLDER — update with your actual routes)*

---

##  Challenges & Learnings

- **Role-based access control**: Designed a clean permission structure to separate Buyer and Seller capabilities while sharing a common authentication system.
- **Payment security**: Implemented Razorpay signature verification to prevent payment tampering and ensure transaction integrity.
- **Product variants**: Structured MongoDB schemas to flexibly handle product variants (size, color, stock) without data duplication.

---

##  Impact

- ✅ Fully deployed, live production application
- 🔐 Secure authentication with dual login methods (JWT + Google)
- 💳 Real payment processing via Razorpay integration
- 📦 Complete buyer-to-seller order lifecycle support

---

## 🔮 Future Scope

 order tracking with real-time status updates, wishlist feature, product reviews/ratings, admin analytics dashboard, email notifications

---

##  Contact

**Rahul Mohite**
📧 rahul.mohite.techai@gmail.com
📱 +91 9922935750

---

⭐ If you found this project useful, consider giving it a star!
