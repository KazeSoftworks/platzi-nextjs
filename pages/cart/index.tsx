import CartItems from '@components/Cart/CartItems'
import CartTotal from '@components/Cart/CartTotal'
import { useAtom } from 'jotai'
import { deleleFromCartAtom, loadableCartItemsData } from 'store/cart'
import styled from 'styled-components'

const CartContainer = styled.main`
width: 700px;
margin: 1em auto 1em auto;
`

const Cart = (): JSX.Element => {
  const [result] = useAtom(loadableCartItemsData)
  const [,deleleFromCart] = useAtom(deleleFromCartAtom)
  return (
    <CartContainer>
      {result.state === 'loading' && 'Loading cart data'}
      {result.state === 'hasData' &&
        <>
          <CartItems items={result.data.items} deleteFn={deleleFromCart} />
          <CartTotal count={result.data.count} total={result.data.total} />
        </>}

    </CartContainer>
  )
}
export default Cart
