import React, { useEffect, useState } from 'react'

function useFetchProducts() {
    const [products,setProducts]=useState([])
useEffect(()=>{

    function  getProducts(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))
    }
    getProducts()
 
},[])


  return products

  
}

export default useFetchProducts
