import React, { useEffect, useState } from 'react'

function useFetchProduct(id) {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    },[])
  return (
    product
  )
}

export default useFetchProduct
