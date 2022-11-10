import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { getProductListAtom, productListAtom } from 'store/productList'
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
  const [productList] = useAtom(productListAtom)
  const [,getProductList] = useAtom(getProductListAtom)

  useEffect(() => {
    getProductList().catch((e) => {
      console.error(e)
    })
  }, [getProductList])
  return (
    <Container>
      <List>
        {productList.length > 0 && productList.map((product) => {
          return <ProductCard key={product.id} item={product} />
        })}
      </List>
    </Container>
  )
}
export default ProductList
