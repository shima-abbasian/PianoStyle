# داده و مسیریابی

## منبع داده

تمام دادهٔ نمایشی فعلی در این فایل است:

```text
src/data/site.fa.json
```

بخش‌های اصلی JSON:

- هویت فروشگاه و واحد پول
- Header، Search، Menu و Announcement
- دادهٔ صفحهٔ خانه
- `plp`: لیست دسته‌بندی و محصولات
- `pdp`: قالب کامل صفحهٔ محصول
- Footer و SEO

## رفتار صفحات محصول

- اگر slug برابر محصول کامل `pdp` باشد، همان رکورد کامل نمایش داده می‌شود.
- برای محصول‌های دیگر، `ProductPage` اطلاعات PLP را روی قالب PDP قرار می‌دهد.
- Related productها فعلاً از اولین محصولات متفاوت با slug جاری انتخاب می‌شوند.
- این منطق Mock است و بعداً باید با پاسخ API جایگزین شود.

## Routeها

| Route | توضیح |
|---|---|
| `/` | صفحهٔ خانه |
| `/category` | دستهٔ اصلی |
| `/category/:slug` | زیردسته |
| `/c/:slug` | Alias سازگار با URL قدیمی |
| `/product` | محصول پیش‌فرض |
| `/product/:slug` | محصول با slug |
| `/p/:slug` | Alias سازگار با URL قدیمی |

Route ناشناخته به صفحهٔ خانه Redirect می‌شود.

## SmartLink

`SmartLink` URLهای موجود در JSON را تبدیل می‌کند:

```text
/c/example → /category/example
/p/example → /product/example
```

URLهایی که هنوز صفحه ندارند فعلاً به `#` تبدیل می‌شوند. هنگام افزودن صفحهٔ واقعی، mapping آن را در `src/utils/format.ts` کامل کن.

## آماده‌سازی برای API

در زمان اتصال بک‌اند:

1. `src/services/` ایجاد شود.
2. دسترسی HTTP فقط در Serviceها قرار گیرد.
3. شکل دادهٔ API به مدل مصرفی UI Map شود.
4. Pageها Loading، Error و Empty state داشته باشند.
5. import مستقیم JSON به‌تدریج با Service جایگزین شود.
6. قرارداد قیمت، موجودی، تصویر، slug و Pagination با بک‌اند مستند شود.

کامپوننت‌ها نباید مستقیماً URL API را بدانند.
