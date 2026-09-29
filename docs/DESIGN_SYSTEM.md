# دیزاین سیستم Piano Style

این سند خلاصهٔ اجرایی است. برای جزئیات کامل و سابقهٔ تصمیم‌ها، `reference/Piano-Redesign-Spec.md` مرجع اصلی است.

## اصول اصلی

1. طراحی Mobile-first است.
2. منطق Layout از Vertbaudet الهام گرفته، اما هویت بصری Piano Style است.
3. متن‌ها مشکی‌اند و بنفش فقط Accent است.
4. همهٔ متن‌ها با خانوادهٔ Modam نمایش داده می‌شوند.
5. گوشهٔ اجزای معمولی تیز است؛ دایره‌های واقعی مانند Icon button و Badge دایره‌ای باقی می‌مانند.
6. Railها باید Width، Gap، Swipe و Snap همسان داشته باشند.

## Tokenهای کلیدی

Tokenها در `src/app.css` و بلوک `@theme` تعریف شده‌اند.

| نقش | Token | مقدار |
|---|---|---|
| Accent اصلی | `--color-brand` | `#782386` |
| Hover | `--color-brand-hover` | `#661e72` |
| بنفش روشن | `--color-brand-tint` | `#f4eaf7` |
| متن اصلی | `--color-ink` | `#000000` |
| متن ثانویه | `--color-ink-muted` | `#6d6e71` |
| خط | `--color-line` | `#e6e7e8` |
| Sale | `--color-sale` | `#cd3232` |
| سطح تصویر | `--color-surface` | `#f2f1f0` |

## تایپوگرافی

- بدنه و UI: `ModamFaNum`
- محتوای فنی LTR: `ModamStd`
- وزن‌ها: 200 تا 900 در `public/fonts/Modam/`
- اعداد قیمت و تخفیف با glyph فارسی نمایش داده می‌شوند.
- تبدیل دستی اعداد با JavaScript لازم نیست.

## شکل و Shadow

- `--radius-vb: 0`
- `--radius-card: 0`
- Shadow محدود است؛ از `shadow-soft` فقط برای Layerهای لازم استفاده شود.
- `rounded-full` فقط برای دایره‌های معنایی مجاز است.

## فاصله و Responsive

- Gutter پایهٔ دسکتاپ: 40px (`--spacing-gutter`)
- Padding و Gap در موبایل کوچک‌تر و پلکانی است.
- Breakpointهای مهم پروژه: حدود 480، 768، 900، 1080 و 1300 پیکسل.
- هر تغییر باید حداقل در 360، 390، 768، 1024 و Desktop بررسی شود.
- `documentElement.scrollWidth` نباید از `clientWidth` بیشتر شود.

## قواعد ویرایش استایل

- ابتدا Token یا کلاس موجود را استفاده کن.
- Hex خام را داخل JSX تکرار نکن.
- برای Style سراسری یا کلاس کامپوننتی از `src/app.css` استفاده کن.
- برای تغییر محلی ساده از Utilityهای Tailwind استفاده کن.
- فایل‌های CSS داخل `dist/` را ویرایش نکن.
