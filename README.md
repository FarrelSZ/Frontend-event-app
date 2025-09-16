# 📅 EventApp  

EventApp adalah aplikasi manajemen event fullstack yang saya buat sebagai bagian dari course online.  
Aplikasi ini membantu pengguna (admin & member) untuk membuat, mengelola, dan mengikuti event dengan sistem tiket digital dan pembayaran online.  

---

## 🚀 Fitur Utama  

### 👨‍💻 Admin  
- 🗓️ **CRUD Event** → buat, edit, hapus, dan kelola event  
- 🏷️ **CRUD Kategori Event** → atur kategori event  
- 🎟️ **CRUD Ticket** → kelola tiket (harga, kuota, status)  
- 🖼️ **CRUD Banner** → pasang banner promosi event  

### 🙋 Member  
- 🔍 **Lihat Event** → telusuri event berdasarkan kategori atau tanggal  
- 🎟️ **Beli Tiket** → pesan tiket dengan integrasi pembayaran Midtrans  
- 📂 **Riwayat Pemesanan** → cek daftar tiket yang sudah dibeli  

---

## 🎯 Tujuan Project

### Project ini dibuat sebagai:
- 💡 Latihan fullstack dari course online
- 🏗️ Portfolio pribadi untuk menunjukkan skill modern web dev
- 📚 Pembelajaran dalam membangun aplikasi web modern dan mempelajari teknologi tersebut

---

## 🖼️ Preview  
(Sisipkan screenshot di sini, contoh:)  
![EventApp Screenshot](./screenshot.png)  

---

## 🛠️ Tech Stack   

### 🎨 Frontend  
- **React JS 19** → Frontend Library  
- **Next JS 15** → React Framework  
- **Tailwind CSS** → CSS Framework  
- **Next UI / Hero UI** → UI Component Library  
- **Tanstack React Query + Axios** → Data Fetching & API Handling  
- **React Hook Form + Yup** → Form Handling & Data Validation  
- **Next Auth** → Authentication Library  
- **Midtrans** → Payment Gateway  

---

## ⚙️ Cara Menjalankan  

### 1. Clone repository  
```bash
git clone https://github.com/username/eventapp.git
cd eventapp
```
### 2. Install Dependencies 
```bash
npm install
```
### 3. Jalankan server
```bash
npm run dev
```
---

Untuk yang frontend, github nya ada di sini: https://github.com/FarrelSZ/Frontend-event-app

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
