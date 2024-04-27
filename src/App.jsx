import { useState } from 'react'

import Products from './components/Products'
import Header from './components/Header'
import dagingSapi from './assets/products/daging-sapi.png'
import sausAbg from './assets/products/saus-abg.png'
import ikanSalamander from './assets/products/ikan-salamander.png'
import berasKygristan from './assets/products/beras-kygristan.png'
import jerukMedan from './assets/products/jeruk-medan.png'

function App() {
  const [products, setProducts] = useState([
    {
      code: 'SKU01234556',
      name: 'Daging Sapi',
      price: 10000,
      image: dagingSapi,
      qty: 0,
    },
    {
      code: 'SKU01234556',
      name: 'Saus ABG - Pedas',
      price: 10000,
      image: sausAbg,
      qty: 0,
    },
    {
      code: 'SKU01234556',
      name: 'Ikan Salamander',
      price: 10000,
      image: ikanSalamander,
      qty: 0,
    },
    {
      code: 'SKU01234556',
      name: 'Beras Kygristan',
      price: 10000,
      image: berasKygristan,
      qty: 0,
    },
    {
      code: 'SKU01234556',
      name: 'Jeruk Medan Manis',
      price: 10000,
      image: jerukMedan,
      qty: 0,
    },
  ])

  const handleChanges = (index, newQuantity) => {
    const updatedProducts = [...products]
    updatedProducts[index].qty = newQuantity
    setProducts(updatedProducts)
  }

  return (
    <>
      <Header />

      <Products
        products={products}
        handleChanges={handleChanges}
      />
    </>
  )
}

export default App
