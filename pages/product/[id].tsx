import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { addToCartAtom } from 'store/cart'

const ProductContainer = styled.main`
max-width: 700px;
margin-left: auto;
margin-right: auto;
margin-top: 1em;
`

const ProductItem = styled.section`
display: flex;
flex-direction: row;
align-items: center;
`

const ProductItemDescriptor = styled.div`
margin: 1em;
width: 100%;
`

const Sku = styled.p`
  background-color: #383838;
  color: white;
  border-radius: 5px;
  font-size: 0.7rem;
  padding: 0.5rem;
  max-width: fit-content;
`

const ProductDescription = styled.section`
display: flex;
flex-direction: column;
p{
margin: 0;
padding-bottom: 1em;
border-bottom: 0.15em solid #efefef;
}
`

const ProductDescriptionTable = styled.table`
border-collapse: collapse;
margin-top: 1em;
th{
  text-align: left;
}
th,td{
  border: 1px solid #efefef;
  padding: 0.75em;
}
thead{
  th{
    background-color: #f8f8f8;
  }
}
tbody{
  th{
    font-weight: normal;
  }
}
`

const AddToCartButton = styled.button`
  
`

const ProductPage = (): JSX.Element => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const [, addToCart] = useAtom(addToCartAtom)
  const router = useRouter()
  const { id } = router.query

  const handleAddToCart = (): void => {
    if (product != null) addToCart(product?.id)
  }

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
    <ProductContainer>
      {(product !== null && product !== undefined) &&
        <>
          <ProductItem>
            <Image src={product.image} alt={`image of ${product.name}`} width='300' height='300' />
            <ProductItemDescriptor>
              <h1>{product.name}</h1>
              <p>$ {product.price}</p>
              <Sku>SKU: {product.sku}</Sku>
              <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>
            </ProductItemDescriptor>
          </ProductItem>
          <ProductDescription>
            <h3>About this avocado</h3>
            <p>{product.attributes.description}</p>
            <ProductDescriptionTable>
              <thead>
                <tr>
                  <th colSpan={2}>Attributes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Shape</th>
                  <td>{product.attributes.shape}</td>
                </tr>
                <tr>
                  <th>Hardiness</th>
                  <td>{product.attributes.hardiness}</td>
                </tr>
                <tr>
                  <th>Taste</th>
                  <td>{product.attributes.taste}</td>
                </tr>
              </tbody>
            </ProductDescriptionTable>
          </ProductDescription>
        </>}
    </ProductContainer>
  )
}

export default ProductPage
