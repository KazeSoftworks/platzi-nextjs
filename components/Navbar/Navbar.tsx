import React from 'react'
import { NextRouter, useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

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
  width: 8em;
  align-items: center;
  height: 100%;
  background-color: ${(props) => (props.href === props.pathName && '#efefef')};
  transition: background-color 250ms ease-out;
  &:hover {
    background-color: #efefef;
  }
`
export default function Navbar (): JSX.Element {
  const router = useRouter()
  return (
    <Nav>
      <menu>
        <Link href='/' passHref legacyBehavior>
          <StyledLink pathName={router.pathname}>Avo Store</StyledLink>
        </Link>
        <Link href='/about' passHref legacyBehavior>
          <StyledLink pathName={router.pathname}>Canasta</StyledLink>
        </Link>
      </menu>
    </Nav>
  )
}
