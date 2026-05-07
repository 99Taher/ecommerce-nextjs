# ShopHub - E-Commerce Platform

A modern, fully-featured e-commerce platform built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## 🚀 Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Product Catalog**: Browse products by category with filtering
- **Shopping Cart**: Add/remove products from cart with quantity management
- **Order Management**: Place and track orders
- **Database**: PostgreSQL with Prisma ORM
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Type Safety**: Full TypeScript support
- **Modern Stack**: Next.js 14 App Router with Server Components

## 📦 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js 14 App Router, Node.js
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: JWT, bcryptjs
- **Validation**: Zod
- **HTTP Client**: Axios

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/99Taher/ecommerce-nextjs.git
   cd ecommerce-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your PostgreSQL database URL:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"
   JWT_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"
   ```

4. **Setup database**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
ecommerce-nextjs/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   ├── products/         # Products page
│   │   ├── cart/             # Cart page
│   │   ├── login/            # Login page
│   │   ├── register/         # Register page
│   │   └── layout.tsx        # Root layout
│   ├── components/           # React components
│   ├── lib/
│   │   ├── auth.ts           # Auth utilities
│   │   ├── prisma.ts         # Prisma client
│   │   ├── validators.ts     # Zod schemas
│   │   └── middleware.ts     # Custom middleware
│   └── types/                # TypeScript types
├── prisma/
│   └── schema.prisma         # Database schema
├── public/                   # Static files
├── .env.example              # Environment variables template
└── package.json
```

## 🔐 API Routes

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products with filtering
- `POST /api/products` - Create new product

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/[productId]` - Remove item from cart

## 🚀 Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Connect to Vercel and deploy
```

Set environment variables in Vercel dashboard.

## 📝 Database Migrations

Create a new migration:
```bash
npx prisma migrate dev --name <migration-name>
```

View database UI:
```bash
npx prisma studio
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License

---

Made with ❤️ by ShopHub Team