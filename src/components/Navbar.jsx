import "../styles/navbar.css"
import { Link } from "react-router-dom"
import image from "../styles/JAVQMPEJ6ZGS7HGZ45HF5EQDI4.jpg"


function Navbar() {
 
    return (
        <div className="navbar-container">
            
<img src={image} className="logo" alt="" />
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Navbar
