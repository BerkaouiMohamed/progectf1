import HomeContext from "./HomeContext"
import ProductsContext from "./ProductsContext"

function IndexContext(props) {

    return (
        <HomeContext>
            <ProductsContext>
                {props.children}
            </ProductsContext>
        </HomeContext>
    )
}

export default IndexContext
