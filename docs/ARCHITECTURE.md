# معماری پروژه

## جریان اجرا

```text
index.html
  → src/main.tsx
    → BrowserRouter
      → src/App.tsx
        → SiteLayout
          ├── Header / MegaMenu / Announcement
          ├── Page via <Outlet />
          └── Footer
```

Vite فایل‌های JSX و `src/app.css` را در زمان توسعه و Build پردازش می‌کند. Assetهای `public/` بدون تغییر در ریشهٔ خروجی منتشر می‌شوند.

## ساختار پوشه‌ها

```text
src/
├── components/
│   ├── common/   اجزای قابل‌استفاده در چند صفحه
│   ├── home/     سکشن‌های مستقل صفحهٔ اصلی
│   └── layout/   اجزای سراسری و Layout
├── pages/        کامپوننت سطح Route
├── data/         Mock data محلی
├── utils/        توابع خالص و بدون UI
├── App.tsx       جدول Routeها
├── main.tsx      Bootstrap برنامه
└── app.css       Tailwind + Token + CSS کامپوننت
```

## مرزبندی مسئولیت‌ها

- `pages/` داده و پارامتر Route را به اجزای کوچک‌تر وصل می‌کند.
- `components/` مسئول نمایش و تعامل UI است.
- `utils/` فقط منطق خالص مانند فرمت قیمت و تبدیل URL را نگه می‌دارد.
- `data/` دادهٔ نمونه را نگه می‌دارد؛ منطق UI نباید داخل JSON قرار گیرد.
- `public/` فقط Asset است و نباید ماژول JavaScript برنامه در آن قرار گیرد.

## State فعلی

Stateها محلی‌اند و Context یا Store سراسری وجود ندارد:

- باز/بسته‌شدن MegaMenu در `Header`
- Tab فعال MegaMenu در `MegaMenu`
- علاقه‌مندی کارت در `ProductCard`
- رنگ و سایز انتخابی در `ProductBuyBox`
- Scroll هر Rail با ref محلی در `Rail`

اگر سبد خرید یا حساب کاربری واقعی اضافه شد، ابتدا قرارداد State آن تعریف و سپس Context یا Store انتخاب شود؛ اکنون افزودن Store ضرورت ندارد.

## افزودن یک صفحه

1. فایل صفحه را در `src/pages/` بساز.
2. بخش‌های بزرگ آن را در `src/components/<feature>/` جدا کن.
3. Route را در `src/App.tsx` ثبت کن.
4. عنوان صفحه را تنظیم کن.
5. لینک داخلی را با React Router ایجاد کن.
6. Route مستقیم، Refresh و Build را تست کن.
