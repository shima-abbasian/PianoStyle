# خلاصهٔ پروژه برای AI

## پروژه چیست؟

فرانت مستقل فروشگاه فارسی Piano Style است. پروژه هیچ وابستگی اجرایی به C#، Razor یا ASP.NET ندارد و با React، Vite و Tailwind CSS v4 اجرا می‌شود.

## وضعیت فعلی

- مسیر پروژه: `D:\frontend-static`
- زبان UI: فارسی
- جهت: RTL
- صفحات: Home، Category و Product
- داده: Mock محلی در `src/data/site.fa.json`
- بک‌اند/API واقعی: فعلاً وجود ندارد
- فونت: Modam؛ نسخهٔ `FaNum` برای متن و اعداد فارسی
- رنگ اصلی: بنفش `#782386`
- گوشه‌های اجزای معمولی: تیز (`0`)

## تکنولوژی‌ها

- React 19
- React Router
- Vite 7
- Tailwind CSS 4
- TypeScript + TSX با `strict` فعال

## فایل‌های ورودی اصلی

- `src/main.tsx`: Mount برنامه
- `src/App.tsx`: Routeها
- `src/components/layout/SiteLayout.tsx`: Layout عمومی
- `src/app.css`: Tailwind، Tokenها و CSS کامپوننت‌ها
- `src/data/site.fa.json`: کل دادهٔ نمونه

## صفحات و Routeها

| Route | صفحه | فایل |
|---|---|---|
| `/` | خانه | `src/pages/HomePage.tsx` |
| `/category` | لیست همهٔ محصولات | `src/pages/CategoryPage.tsx` |
| `/category/:slug` | زیردسته | `src/pages/CategoryPage.tsx` |
| `/c/:slug` | Alias دسته‌بندی | `src/pages/CategoryPage.tsx` |
| `/product/:slug` | جزئیات محصول | `src/pages/ProductPage.tsx` |
| `/p/:slug` | Alias محصول | `src/pages/ProductPage.tsx` |

## نقشهٔ مستندات

| اگر کار این است... | فقط این سند را هم بخوان |
|---|---|
| افزودن صفحه یا تغییر ساختار | `ARCHITECTURE.md` |
| اصلاح Header/Footer/Card/Section | `COMPONENTS.md` |
| تغییر بصری یا Responsive | `DESIGN_SYSTEM.md` |
| تغییر JSON یا Route | `DATA_AND_ROUTING.md` |
| اجرا، Build یا تست | `DEVELOPMENT.md` |
| بررسی چرایی انتخاب‌ها | `DECISIONS.md` |

## محدودیت‌های مهم

- پروژهٔ دات‌نت بیرون از Scope است.
- `dist/` و `node_modules/` ویرایش دستی نشوند.
- سبد خرید، حساب کاربری، جست‌وجوی واقعی و پرداخت فعلاً نمایشی‌اند.
- داده‌ها از JSON import می‌شوند؛ اتصال API باید بعداً پشت یک لایهٔ Data Service قرار گیرد.
