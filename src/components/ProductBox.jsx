import { Link } from "react-router-dom"
import"../styles/productBox.css"
function ProductBox({product}) {
 
  return (
    <div className='product-box'>
<Link to={`/products/${product.id}`}><img src={product.image} alt="" /></Link>
<h2>{ product.title}</h2>
<p>{product.price}</p>
<button >Add to cart</button>      
    </div>
  )
}

export default ProductBox
