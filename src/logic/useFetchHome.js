import React, { useEffect, useState } from 'react'

function useFetchHome() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
    
        function  getProducts(){
            fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        }
        getProducts()
     
    },[])


  return products

  
}

export default useFetchHome
