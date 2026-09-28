# Природні Мандри — Frontend

Каталог природних місць для відпочинку в Україні: пошук і фільтрація локацій, сторінки місць із відгуками,
профілі мандрівників, додавання й редагування власних локацій.

## Технології

Next.js 15 (App Router) · Montserrat · TypeScript · CSS Modules · modern-normalize · TanStack Query · Zustand ·
Formik + Yup · Axios · Swiper · react-hot-toast

## Запуск

```bash
npm install
cp .env.template .env.local     # BACKEND_API_URL — адреса бекенду з /api
npm run dev                     # http://localhost:3000
```

## Структура

```
app/                 сторінки (App Router), app/api — Route Handlers (проксі до бекенду)
components/          компонент = папка: Name.tsx + Name.module.css; components/ui — UI kit
lib/api/             client.ts (axios → /api), proxy.ts (Route Handler → бекенд), функції запитів
lib/store/           Zustand: authStore, categoriesStore
types/               типи за API-контрактом
middleware.ts        приватні маршрути + оновлення сесії
```

Бекенд: https://github.com/sshhsa/project-greenWay-backend · Задачі: [docs/FRONTEND_TASKS.md](docs/FRONTEND_TASKS.md)

## Команда

_Заповнити наприкінці: учасник — роль — задачі._

## Деплой

_Посилання на Vercel — додати після першого деплою._
