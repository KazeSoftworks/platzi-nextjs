type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

interface TProductAttributes {
  description: string
  shape: string
  hardiness: string
  taste: string
}

interface TProduct {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}

interface TCartResult extends TProduct {
  amount: number
}

interface TCartResponse {
  items: TCartResult[]
  count: number
  total: string
}

type TAPIAVODetailResponse = TProduct

interface TAPIAvoResponse {
  lenght: number
  data: TProduct[]
  error?: string
}

interface TCart {
  [key: TProductId]: number
}

interface TAPIProductsResponse {
  [id: TProductId]: TProduct
}
