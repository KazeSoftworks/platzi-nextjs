// import React, { useEffect, useState } from 'react'
import ProductList from '@components/Product/ProductList'
import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie-player'
import AnimatedAvocado from '@public/images/animations/avocado-exercise.json'

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0 2em 0;
  h1{
    display: flex;
    align-items: center;

    img{
      max-height: 1em
    }
  }
  p {
    color: #3bac61
  }
  .player{
    width: 320px
  }
`

const HomePage = (): JSX.Element => {
  return (
    <>
      <Banner>
        <h1>Avo
          <Lottie
            loop
            animationData={AnimatedAvocado}
            play
            style={{ width: 100, height: 100 }}
          />
          Store
        </h1>
        <p>What avocado would you like today?</p>
      </Banner>
      <ProductList />
    </>
  )
}

export default HomePage
