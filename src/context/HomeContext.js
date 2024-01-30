import React, { createContext, useEffect, useState } from 'react'

export const homeCont = createContext()
function HomeContext(props) {
  const [products, setProducts] = useState([])
  useEffect(() => {

    function getProducts() {
      fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
        .then(json => setProducts(json))
    }
    getProducts()

  }, [])

  return (
    <homeCont.Provider value={products}>
      {props.children}
    </homeCont.Provider>
  )
}

export default HomeContext
