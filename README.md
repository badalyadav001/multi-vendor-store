# Multi-Vendor Store Catalog & Dynamic Cart

A mobile-first multi-vendor shopping experience built with Next.js, TypeScript, and Tailwind CSS.

The application allows users to browse products from multiple stores and manage products from different vendors within a single dynamic cart.

## 🚀 Live Demo
https://multi-vendor-store-liart.vercel.app/

## 📌 Features

- 📱 Mobile-first responsive UI
- 🏪 Multi-vendor product catalog
- 🛒 Dynamic shopping cart
- ➕ Increase product quantity
- ➖ Decrease product quantity
- 🗑️ Remove items from cart
- 🏷️ Store-wise cart grouping
- 💰 Real-time total price calculation
- 🔢 Real-time total item count
- 📌 Sticky bottom checkout bar
- 💾 Cart persistence using localStorage
- 🛍️ Same product from different stores handled independently
- ⚡ Fast and lightweight frontend
- ♿ Basic accessible interactive elements

## 🛠️ Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Context API
- localStorage
- Git & GitHub

## 📂 Project Structure

```text
multi-vendor-store/
├── app/
│   ├── cart/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── CartBar.tsx
│   ├── CartContext.tsx
│   ├── CartView.tsx
│   ├── ProductCard.tsx
│   └── ProductList.tsx
│
├── data/
│   └── products.ts
│
├── types/
│   └── product.ts
│
├── public/
├── package.json
└── README.md

🛒 Cart Behavior

The cart supports products from multiple stores simultaneously.

For example:

Ramu Mart
├── Fresh Milk × 1
└── Organic Spices × 1

Krishna Dairy
└── Fresh Milk × 1

Products are tracked using their unique product IDs, so identical product names from different stores remain separate cart items.

📱 Responsive Design

The interface is designed with a mobile-first approach and optimized for screen widths between:

360px
375px
390px
430px

The layout also adapts naturally to larger screens.

💾 Cart Persistence

Cart data is persisted using browser localStorage.

This means users can refresh or revisit the application without losing their current cart items.

The cart is stored under:
multi-vendor-cart

🎯 Assessment Requirements Covered
Requirement	Status
Product catalog	✅
Product details	✅
Image placeholder	✅
Add to cart	✅
Multi-vendor cart	✅
Store-wise grouping	✅
Quantity management	✅
Remove items	✅
Sticky checkout bar	✅
Live item count	✅
Live total price	✅
Mobile-first design	✅
localStorage persistence	✅

👨‍💻 Developer
Badal Yadav
Frontend Developer
Technologies
Next.js · React · TypeScript · Tailwind CSS
