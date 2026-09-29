# راهنمای کامپوننت‌ها

## Layout

| کامپوننت | مسئولیت |
|---|---|
| `SiteLayout` | Header، Outlet، Footer و Scroll ابتدای Route |
| `Header` | لوگو، جست‌وجو، ابزارها، حالت Overlay و بازکردن منو |
| `Announcement` | نوار پیام و کپی کد تخفیف |
| `MegaMenu` | Tabها، Promoها و گروه لینک‌ها |
| `Footer` | SEO صفحهٔ خانه، خبرنامه، ستون لینک‌ها و پرداخت |

## Home

| کامپوننت | مسئولیت |
|---|---|
| `HeroSection` | تصویر Hero، Offer و CTA |
| `CategoryTiles` | Rail دسته‌های اصلی |
| `PromoBand` | پنل کمپین و Rail محصول |
| `FocusSection` | پرفروش‌ترین‌ها/Focus tiles |
| `BrandsSection` | Hero برند و Rail برندها |

ترتیب این بخش‌ها در `HomePage.jsx` تعیین می‌شود.

## Common

| کامپوننت | Props اصلی | توضیح |
|---|---|---|
| `ProductCard` | `product` | کارت محصول در Grid و Rail |
| `ProductGallery` | `product` | تصاویر PDP و علاقه‌مندی |
| `ProductBuyBox` | `product` | رنگ، سایز، تعداد، قیمت و CTA |
| `Rail` | `children`, `className`, `labelledBy` | اسکرول افقی مشترک |
| `SmartLink` | `href` | تبدیل URL داده به Route داخلی |
| `Icon` | `path`, `className`, `fill` | SVG خطی مشترک |

## قواعد کامپوننت‌سازی

- فایل Page نباید تبدیل به مجموعهٔ بزرگی از Markup تکراری شود.
- وقتی بخشی State، رفتار، تکرار یا هویت بصری مستقل دارد، آن را جدا کن.
- برای جزء بسیار کوچک و یک‌بارمصرف، شکستن افراطی لازم نیست.
- Props باید دادهٔ موردنیاز را دریافت کنند؛ کامپوننت عمومی نباید بی‌دلیل کل `site.fa.json` را import کند.
- کلید List باید واقعاً یکتا باشد؛ بعضی slugهای Mock تکراری‌اند، بنابراین در Grid می‌توان از `slug-index` استفاده کرد.
- تعاملات با State و event handler React نوشته شوند؛ DOM query و `innerHTML` استفاده نشود.

## صفحات

- `HomePage`: فقط ترکیب سکشن‌ها.
- `CategoryPage`: slug فعال، Chipها، Toolbar، Grid و Pagination نمایشی.
- `ProductPage`: ساخت Product fallback از PLP، Gallery، BuyBox، Related و Tabs.
