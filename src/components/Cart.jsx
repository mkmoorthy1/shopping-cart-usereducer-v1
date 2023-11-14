import React from 'react';
import {ShoppingAppState} from '../context/Context'
import './cart.css'
function Cart() {

    const {state,dispatch} =ShoppingAppState()

    let totalCost=0

    if(state.cart.length>0){
        state.cart.map((cart)=>{
            totalCost = totalCost + (cart.qty * cart.price)
        })

        console.log(totalCost);
    }

    
    console.log(totalCost);


    //console.log(state.cart)

    const increase_qty=(qty,id)=>{
    
        dispatch({type:"ADD_QTY_ONE",payload:{id:id,qty:qty+1}})
      }
    
      const decrease_qty=(qty,id)=>{
       
          console.log(qty)
          dispatch({type:"REMOVE_QTY_ONE",payload:{id:id,qty:qty-1}})
          
        
      }

      const deleteCartItem=(id)=>{
        dispatch({type:"REMOVE_CART_ITEM_ONE",payload:{id:id}})
      }

    return (
        <div className="cart-main-container">
           {
            state.cart.length > 0 &&<> <p className="cart-info">There are {state.cart.length} items in your cart.Total Cost is <span className="total-cost">₹{totalCost}</span></p>
            <button className="checkout-btn">Proceed To Checkout</button>
            </>
           }
            {
                state.cart.length === 0 ?
                    <p>No Items Found. Your Cart Is Empty</p>
              :
              
              
              state.cart.map((cart)=>(
                <div className="cart-container" key={cart.id}>
                    
                    <div className="cart">
                        <div className="cart-image-container">
                            <img src={cart.imgdata} alt="" className='product-img' />
                        </div>
                        <p className="pname">{cart.rname}</p>
                        <p>{cart.price}</p>
                        <p className="total">{cart.price*cart.qty}</p>
                        <div className="cart-item-buttons">
                            <button className="cart-item-quantity-decrease" onClick={()=>decrease_qty(cart.qty,cart.id)}>-</button>
                            <label className="qty-label">{cart.qty}</label>
                            <button className="cart-item-quantity-increase" onClick={()=>increase_qty(cart.qty,cart.id)}>+</button>
                        </div>
                        <div>
                            <i className="fa-solid fa-trash" onClick={()=>deleteCartItem(cart.id)}></i>
                        </div>
                    </div>
                </div>
              ))
               
            }
           
        </div>
        
    );
}

export default Cart;
