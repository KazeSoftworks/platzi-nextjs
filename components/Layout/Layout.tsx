import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
