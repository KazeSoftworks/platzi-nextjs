import currency from 'currency.js'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Cross from '@public/images/cross.svg'

const EmptyCart = styled.section`
padding: 1em 1.5em 1em 1.5em;
background-color: #fff7e3;
border: 1px solid #b3840f;
color: #b3840f;
border-radius: 5px;
p{
  margin: 0.5em 0 0 0;
}

`
const EmptyHeader = styled.div`
font-weight: bold;
font-size: large;
`
const CartItem = styled.div`
display: flex;
flex-direction: row;
height: auto;
border-bottom: 1px solid #d8d8d8;
`

const CartItemDescription = styled.div`
  padding-left: 1.5em;
  width: 60%;
  a, a:visited, a:hover, a:active {
  color: #2c95e0;
  }
  h2 {
    margin: 1em 0 0 0;
  }
  p {
    margin: 0.5em 0 0 0;
    color: grey;
    font-size: 0.9em;
  }

`

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`

const RemoveButton = styled.button`
  width: 3em;
  height: 2.75em;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const CartItems = ({ items, deleteFn }: { items: TCartResult[], deleteFn: (update: string) => void }): JSX.Element => {
  if (items.length === 0) {
    return (
      <EmptyCart>
        <EmptyHeader>Your cart is empty</EmptyHeader>
        <p>You will need to add some items to the cart before you can checkout.</p>
      </EmptyCart>
    )
  }

  const handleDeleteFromCart = (productId: TProductId): void => {
    deleteFn(productId)
  }

  return (
    <section>{items.map((product) =>
      <CartItem key={product.id}>
        <ImageContainer><Image src={product.image} alt={product.name} fill /></ImageContainer>
        <CartItemDescription>
          <Link href={`/product/${product.id}`}><h2>{product.name}</h2></Link>
          <p>{product.amount} x ${product.price} ($ {currency(product.price).multiply(product.amount).toString()})</p>
          <RemoveButton onClick={() => handleDeleteFromCart(product.id)}>
            <Image src={Cross} alt='delete button' width={15} height={15} />
          </RemoveButton>
        </CartItemDescription>
      </CartItem>)}
    </section>
  )
}
export default CartItems
