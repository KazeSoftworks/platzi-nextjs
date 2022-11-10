import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react'
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

const AddToCartContainer = styled.div`
  width: 100%;
  height: 2.5em;
  input, button{
    height: 100%;
  }
  input {
    width: 65%;
    padding: 0.75em;
    border-radius: 5px 0 0 5px;
    border: 1px solid grey;
    border-right-style: none;
    box-shadow: none;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px green;
    }
  }
  button{
    width: 35%;
    border: none;
    background-color: #21b421;
    color: white;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    border:none;
    cursor: pointer;
  }
`

const ProductPage = (): JSX.Element => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const [amount, setAmount] = useState(1)
  const [, addToCart] = useAtom(addToCartAtom)
  const router = useRouter()
  const { id } = router.query

  const handleAddToCart = (): void => {
    if (product != null) addToCart({ productId: product?.id, amount })
  }

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>): void => {
    const { valueAsNumber } = event.target
    setAmount(valueAsNumber)
  }

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const { valueAsNumber } = event.target
    if (valueAsNumber <= 0)setAmount(1)
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
              <AddToCartContainer>
                <input type='number' value={amount} onChange={handleChangeAmount} onBlur={handleOnBlur} />
                <button onClick={handleAddToCart}>Add to Cart</button>
              </AddToCartContainer>
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
