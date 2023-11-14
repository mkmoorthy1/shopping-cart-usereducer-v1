//import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {ShoppingAppState} from '../context/Context'
import './product-details.css'
const ProductDetails = () => {
  const {id} = useParams();
  
  //console.log(id)
  const {state,dispatch} =ShoppingAppState();

  //console.log(state.products)
  const product = state.products.find(p=>p.id.toString()===id);
  
  const cart_detail= state.cart.find(p=>p.id.toString()===id);
  //console.log(cart_detail.qty)
  const increase_qty=(qty)=>{
    
    dispatch({type:"ADD_QTY_ONE",payload:{id:id,qty:qty+1}})
  }

  const decrease_qty=(qty)=>{
   
      console.log(qty)
      dispatch({type:"REMOVE_QTY_ONE",payload:{id:id,qty:qty-1}})
      
    
  }

  return (
    
    <section className="single-product-details">
        <header><h2>Product Detail</h2></header>
        <article className="single-product-detail">
            <div className="single-img-container">
              <img src={product.imgdata}/>
            </div>
            <div className="single-product-detail-info">
              
                <h3>Restaurant : {product.rname}</h3>
                <h3>Price : {product.price}</h3>
                <div><h3>Rating: <span className="rating">{product.rating}&nbsp;★</span></h3></div>
                <div className="single-product-more-info">
                    <h5>Address: {product.address}</h5>
                    <h5>Order Review {product.somedata}</h5>
                </div>
                <div className="product-cart-detail">
                  <button className="cart-quantity-decrease" onClick={()=>decrease_qty(cart_detail.qty)}>-</button>
                  <label className="qty-label">{cart_detail.qty}</label>
                  <button className="cart-quantity-increase" onClick={()=>increase_qty(cart_detail.qty)}>+</button>
                </div>
            </div>
            
        </article>
        
    </section>
  )
}

export default ProductDetails