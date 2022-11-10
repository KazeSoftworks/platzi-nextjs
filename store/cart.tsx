import currency from 'currency.js'
import { atom } from 'jotai'
import { loadable } from 'jotai/utils'

export const cartAtom = atom<TCart>({})

const addToCart = (cart: TCart, productId: TProductId): TCart => {
  const newCart = { ...cart }
  if (productId in newCart) {
    newCart[productId] = newCart[productId] + 1
  } else {
    newCart[productId] = 1
  }
  return newCart
}

const removeFromCart = (cart: TCart, productId: TProductId): TCart => {
  const { [productId]: excluded, ...rest } = cart
  return rest
}

export const addToCartAtom = atom(
  null,
  (get, set, productId: TProductId) => {
    set(cartAtom, addToCart(get(cartAtom), productId))
  }
)

export const getCartItemAmountAtom = atom((get) => Object.values(get(cartAtom)).reduce((prev, curr) => prev + curr, 0))

const getCartItemsDataAtom = atom<Promise<TCartResponse>>(async (get) => {
  const request = await fetch('/api/avo')
  const response = await request.json()
  const { data }: { data: TProduct[] } = response

  const productDictionary: TAPIProductsResponse = data.reduce((accumulator, value) => {
    return { ...accumulator, [value.id]: value }
  }, {})
  console.log(productDictionary)
  const cartDictionary = Object.keys(get(cartAtom)).map((key) => {
    return { ...productDictionary[key], amount: get(cartAtom)[key] }
  })
  console.log(cartDictionary)
  const total = currency(cartDictionary.reduce((prev, curr) => (currency(prev).add(currency(curr.price).multiply(curr.amount))), currency(0))).toString()
  return { items: cartDictionary, count: get(getCartItemAmountAtom), total }
})
export const loadableCartItemsData = loadable(getCartItemsDataAtom)

export const deleleFromCartAtom = atom(
  null,
  (get, set, productId: TProductId) => {
    set(cartAtom, removeFromCart(get(cartAtom), productId))
  }
)
