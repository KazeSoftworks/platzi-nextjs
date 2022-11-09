import Header from '@components/Header/Header'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <footer>this is the footer</footer>
    </div>
  )
}

export default Layout
