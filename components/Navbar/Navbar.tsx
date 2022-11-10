import React from 'react'
import { NextRouter, useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import AvocadoLogo from '@public/images/avocado.png'
import ShoppingCartLogo from '@public/images/shopping-cart.png'
import { useAtom } from 'jotai'
import { getCartItemAmountAtom } from 'store/cart'

interface RouterProps {
  pathName: NextRouter['pathname']
}

const Nav = styled.nav`
width: 90%;
height: 4em;
display: flex;
justify-content: center;
menu {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
}
`
const StyledLink = styled.a<RouterProps>`
  display: flex;
  justify-content: center;
  width: 10em;
  align-items: center;
  height: 100%;
  gap: 0.25em;
  background-color: ${(props) => (props.href === props.pathName && '#efefef')};
  transition: background-color 250ms ease-out;
  img{
    max-width: 1.75em;
    max-height: 1.75em;
  }
  &:hover {
    background-color: #efefef;
  }
`
export default function Navbar (): JSX.Element {
  const router = useRouter()
  const [getCartItemAmount] = useAtom(getCartItemAmountAtom)
  return (
    <Nav>
      <menu>
        <Link href='/' passHref legacyBehavior>
          <StyledLink pathName={router.pathname}><Image src={AvocadoLogo} alt='avocado logo' />Avo Store</StyledLink>
        </Link>
        <Link href='/cart' passHref legacyBehavior>
          <StyledLink pathName={router.pathname}><Image src={ShoppingCartLogo} alt='shopping cart logo' />Shopping cart ({getCartItemAmount})</StyledLink>
        </Link>
      </menu>
    </Nav>
  )
}
