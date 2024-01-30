import { useContext } from "react"
import useFetchProducts from "../logic/useFetchProducts"
import ProductBox from "./ProductBox"
import { ProdCont } from "../context/ProductsContext"
function AllProducts() {
const products = useContext(ProdCont)
    return (
        <div className="home-products">
            {products&&products.map((product) => {
                return (
                    <ProductBox key={product.id} product={product} />
                )
            })}

        </div>
    )
}

export default AllProducts
