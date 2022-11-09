// import React, { useEffect, useState } from 'react'
import ProductList from '@components/Product/ProductList'
import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0 2em 0;
  h1{
    display: flex;
    align-items: center;
    gap: 0.25em;
    img{
      max-height: 1em
    }
  }
  p {
    color: #3bac61
  }
`

const HomePage = (): JSX.Element => {
  return (
    <>
      <Banner>
        <h1>Avo<img src='/images/avocado.png' />Store</h1>
        <p>What avocado would you like today?</p>
      </Banner>
      <ProductList />
    </>
  )
}

export default HomePage
