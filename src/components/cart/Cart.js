import React, { useEffect, useState } from "react";
import "./Cart.css";
import { viewCart,removeFromCart } from "../../api/CartApi";
import { useSelector,useDispatch } from "react-redux";
import { setProducts , clear } from "../../redux/ShoppingCartSlice";
import { useNavigate } from "react-router-dom";
import ComponentMapper from "../mapper/ComponentMapper";
let alreadyCalled = false;
export default function Cart({time}){
    const navigate = useNavigate();
    const cartState = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(alreadyCalled) return;
        alreadyCalled = true;
        console.log("i was called");
        if(cartState.products.length<1){
            viewCart()
            .then(response=>{
                dispatch(setProducts(response));
            })
        }
    },[time])

    function handleClick(product){
        removeFromCart(ComponentMapper.productToCartItem(product))
        .then(response=>{
            window.location.reload();
        })
    }

    return(
        <div className="cart-div">
            <div className="cart-left">
                {cartState.products && cartState.products.map((product,index)=>{
                    return (<div className="cart-div2" key={index}>
                        <span>{"product "+(index+1)}</span>
                        <ul>
                            {product.components.map((component,index)=>{
                                return <li><a href={component.url}>{component.name}</a><span>{"        "+component.price+"$"}</span> </li>
                            })}
                        </ul>
                        <span className="cart-total">Total: </span><span className="cart-product-price">{product.combinedPrice}</span>
                        <button onClick={()=>handleClick(product)}>remove</button>
                    </div>)
                })}

            </div>
            <div className="cart-right">

            </div>

        </div>
    )
}
