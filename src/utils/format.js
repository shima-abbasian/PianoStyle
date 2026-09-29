export const number = value => new Intl.NumberFormat('fa-IR').format(value ?? 0)

export const money = value => new Intl.NumberFormat('fa-IR', {
  maximumFractionDigits: 0,
}).format(value ?? 0)

export function internalPath(url) {
  if (!url || url === '#') return '#'
  if (url === '/') return '/'
  if (url.startsWith('/c/')) return `/category/${url.slice(3)}`
  if (url.startsWith('/p/')) return `/product/${url.slice(3)}`
  return '#'
}

export function isOnSale(product) {
  return Number(product?.wasPrice) > Number(product?.price)
}

export function discountPercent(product) {
  return isOnSale(product)
    ? Math.round((1 - product.price / product.wasPrice) * 100)
    : 0
}
