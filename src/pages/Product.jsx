import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchProduct from '../logic/useFetchProduct'

function Product() {
    const param = useParams()
    console.log("🚀 ~ Product ~ param:", param)
    const product=useFetchProduct(param.id)

  return (
    <div>

      
    </div>
  )
}

export default Product
