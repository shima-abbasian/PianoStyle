import data from './site.fa.json'

export type SiteData = typeof data
export type CatalogProduct = SiteData['plp']['products'][number]
export type ColourOption = SiteData['pdp']['colours'][number]
export type ProductTab = SiteData['pdp']['tabs'][number]

export interface ProductDetails {
  slug: string
  brand: string
  title: string
  colourName: string
  rating: number
  reviewCount: number
  price: number
  wasPrice: number | null
  gallery: string[]
  colours: ColourOption[]
  sizes: string[]
  tabs: ProductTab[]
  careLabels: string[]
  relatedTitle: string
}

export default data
