import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = (): JSX.Element => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id !== 'undefined') {
      fetch(`/api/avo/${id as string}`)
        .then(async (response) => await response.json())
        .then((data) => {
          setProduct(data)
        })
        .catch((error) => console.error(error))
    }
  }, [id])

  return (
    <section>
      <h1>{product?.name}</h1>
      <p>{product?.price}</p>
      <p>{product?.sku}</p>
      <p>{product?.attributes.description}</p>
      <p>{product?.attributes.shape}</p>
      <p>{product?.attributes.hardiness}</p>
      <p>{product?.attributes.taste}</p>
    </section>
  )
}

export default ProductPage
