# توسعه، اجرا و QA

## پیش‌نیاز

- Node.js و npm

## نصب و اجرا

```powershell
cd D:\frontend-static
npm install
npm run dev
```

آدرس توسعه:

```text
http://127.0.0.1:4173
```

HTML را با `file:///` باز نکن؛ پروژه باید از Vite اجرا شود.

## Build و Preview

```powershell
npm run build
npm run preview
```

خروجی Production در `dist/` ساخته می‌شود. `dist/` را دستی ویرایش نکن.

## روال پیشنهادی تغییر UI

1. سند مرتبط را بخوان.
2. Page یا Component صاحب UI را پیدا کن.
3. داده را از Markup جدا نگه دار.
4. تغییر را در JSX و `src/app.css` انجام بده.
5. Dev server را اجرا و HMR را بررسی کن.
6. Home، Category و Product را باز کن.
7. Mobile و Desktop را بررسی کن.
8. `npm run build` را اجرا کن.

## چک‌لیست QA

- Console بدون Error و React Warning
- MegaMenu باز و Tabها قابل انتخاب
- Rail قابل Swipe/Scroll
- Product cardها لینک درست دارند
- انتخاب رنگ و سایز PDP کار می‌کند
- CTA افزودن قبل از انتخاب سایز غیرفعال است
- تصاویر 404 ندارند
- RTL و فونت فارسی درست است
- در 360/390/768/1024/Desktop سرریز افقی وجود ندارد
- Refresh روی Route داخلی در محیط Hosting با fallback به `index.html` پشتیبانی می‌شود

## Hosting

چون پروژه از BrowserRouter استفاده می‌کند، Static host باید Routeهای ناشناخته را به `index.html` Rewrite کند. بدون این تنظیم، Refresh مستقیم روی `/product/:slug` ممکن است 404 بدهد.

## فایل‌های غیرقابل‌ویرایش مستقیم

- `node_modules/`
- `dist/`
- پروژهٔ دات‌نت در `D:\PianoStyle\vertbaudet\vertbaudet.com`
