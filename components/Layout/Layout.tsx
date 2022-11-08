import Navbar from '@components/Navbar/Navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>this is the footer</footer>
    </div>
  )
}

export default Layout
