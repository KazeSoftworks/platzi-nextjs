import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  key: string
  item: TProduct
}

const Card = styled.a`
display: flex;
flex-direction: column;
width: 20em;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
cursor: pointer;
transition: 0.25s;
&:hover {
  box-shadow: rgba(0, 0, 0, 0.48) 0px 3px 10px;
  transform: translate(0, -10px);
}
`

const Description = styled.div`
padding: 0 2em 0 2em;
border-top: 1em solid #efefef;
`

const ProductCard = ({ item }: Props): JSX.Element => {
  return (
    <Link href={`/product/${item.id}`} legacyBehavior passHref>
      <Card>
        <img src={item.image} />
        <Description>
          <h2>{item.name}</h2>
          <p>$ {item.price}</p>
        </Description>
      </Card>
    </Link>
  )
}
export default ProductCard
