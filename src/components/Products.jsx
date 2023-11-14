import './products.css'
import Product from './Product';
import { ShoppingApp } from '../context/Context';
import { useContext } from 'react';
import {ShoppingAppState} from '../context/Context'
//import { CartState } from '../context/CartState';
function Products() {

    const {state:{products},} =ShoppingAppState()
    
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "4rem" }}>Our Menu</h1>
            <div className='products-main'>
                <div className="product-list">
                    {
                        products.map((product) => 
                            <Product product={product} key={product.id}/>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Products;
