import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  margin: 0 10em 0 10em;
`

const ProductList = (): JSX.Element => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then(async (response) => await response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <Container>
      <List>
        {productList.map((product) => {
          return <ProductCard key={product.id} item={product} />
        })}
      </List>
    </Container>
  )
}
export default ProductList
