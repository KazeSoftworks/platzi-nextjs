import React from 'react'
import Link from 'next/link'

export default function Navbar (): JSX.Element {
  return (
    <nav>
      <menu>
        <Link href='/'>
          Home
        </Link>
        <Link href='/about'>
          About
        </Link>
      </menu>
    </nav>
  )
}
