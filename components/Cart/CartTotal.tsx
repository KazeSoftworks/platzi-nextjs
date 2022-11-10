import styled from 'styled-components'

const TotalContainer = styled.section`
margin-top: 1em;
padding: 0.85em;
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
border-radius: 5px;
display: flex;
justify-content: space-between;
`

const Subtotals = styled.div`
display: flex;
flex-direction: column;
font-size: 0.95em;
gap:0.5em;
`
const CheckoutButton = styled.button`
background-color: black;
color: white;
width: 9em;
height: auto;
border-radius: 5px;
cursor: pointer;
`

const CartTotal = ({ count, total }: { count: TCartResponse['count'], total: TCartResponse['total'] }): JSX.Element => {
  return (
    <TotalContainer>
      <Subtotals>
        <div>
          <b>Sub total:</b> {count}
        </div>
        <div>
          <b>Total:</b> ${total}
        </div>
      </Subtotals>
      <CheckoutButton><b>Check out</b></CheckoutButton>
    </TotalContainer>
  )
}
export default CartTotal
