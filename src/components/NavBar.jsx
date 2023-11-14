import './navbar.css'
import { NavLink } from 'react-router-dom';
import {ShoppingAppState} from '../context/Context'

function NavBar() {
    const {state} =ShoppingAppState();
    
    let qty=state.cart.length == 0 ? 0: (
        state.cart.reduce((acc,curr)=>{
            return acc+curr.qty
        },0)
    )

    return (
        <nav>
            <div className="container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </div>
            <div className="shopping-cart-icon">
                <i className="fa fa-cart-shopping"></i><div className="shopping-cart-count">{qty}</div>
            </div>
        </nav>
    );
}

export default NavBar;
