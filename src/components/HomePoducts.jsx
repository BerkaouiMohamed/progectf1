import { useContext, useEffect, useState } from "react"
import ProductBox from "./ProductBox"
import useFetchHome from "../logic/useFetchHome"
import { homeCont } from "../context/HomeContext"
function HomePoducts() {
    
   const products=useContext(homeCont)
    
    return (
        <div className="home-products">
            {products!=[]?products.map((product) => {
                return (
                    <ProductBox key={product.id} product={product} />
                )
            }):<h1>loading...</h1>}

        </div>
    )
}

export default HomePoducts
