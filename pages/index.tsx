import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = (): JSX.Element => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then(async (response) => await response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => {
        return <div key={product.id}>{product.name}</div>
      })}
    </div>
  )
}

export default HomePage
