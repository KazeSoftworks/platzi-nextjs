import { atom } from 'jotai'

export const productListAtom = atom<TProduct[]>([])

export const getProductListAtom = atom(
  null,
  async (__, set) => {
    // `update` is any single value we receive for updating this atom
    const response = await fetch('/api/avo')
      .then(async (response) => await response.json())
      .then(({ data }) => {
        return data
      })
      .catch((error) => console.error(error))
    set(productListAtom, response)
  }
)
