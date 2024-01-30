import React, { createContext, useEffect, useState } from 'react'

export const ProdCont=createContext()
function ProductsContext(props)  {
    const [products,setProducts]=useState([])
    useEffect(()=>{
    
        function  getProducts(){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        }
        getProducts()
     
    },[])
    
  return (
    <ProdCont.Provider value={products}>
      {props.children}
    </ProdCont.Provider>
  )
}

export default ProductsContext
