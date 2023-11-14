import { Link } from 'react-router-dom';
import {ShoppingAppState} from '../context/Context'
import {useNavigate} from "react-router-dom"
const Product= ({ product })=> {
    //console.log(product);
    const { id, rname, imgdata, address, delimg, somedata, price, rating, arrimg, qnty } = product
    const {state,dispatch} =ShoppingAppState();
    const navigate = useNavigate();
    const addToCart=()=>{
        //console.log(product)
        dispatch({type:"ADD_TO_CART",payload:product});
        //console.log(state.cart)
        navigate("/product/"+id);
    }

    return (
        <div className="product">
            <div className="product-img">
            <Link to={`/product/${id}`} onClick={()=>addToCart()}>
                <img src={imgdata} alt="" className="productImg" />
            </Link>
            </div>
            <div className="product-details">
                <h3>{rname}</h3>
                <h3>₹.{price}</h3>
            </div>
            <div className="cartButton">
                <button className="cart-button" onClick={()=>addToCart()}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product;
