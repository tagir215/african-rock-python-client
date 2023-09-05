import React, { useEffect, useState } from "react";
import "./Cart.css";
import { viewCart,removeFromCart, getSize } from "../../api/CartApi";
const ok = false;

export default function Cart(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        if(ok) return;

        viewCart()
        .then(response=>{
            setData(response);
            console.log(data);
        })

    },[])

    function handleClick(id){
        removeFromCart(id)
        .then(response =>{
            window.location.reload();
        })
    }

    return(
        <div className="cart-div">
            <div className="cart-left">
                {data && data.map((product,index)=>{
                    return (<div className="cart-div2" key={index}>
                        <span>{"product "+product.id}</span>
                        <ul>
                       {Object.keys(product).map((key) =>
                            product[key] && product[key].name ? (
                                <li key={key} className="cart-li">
                                {product[key].name} <span className="cart-product-price">{product[key].price+"€"} </span> 
                                </li>
                            ) : null
                            )} 
                        </ul>
                        <span className="cart-total">Total: </span><span className="cart-product-price">{product.combinedPrice}</span>
                        <button onClick={()=>handleClick(product.id)}>remove</button>
                    </div>)
                })}

            </div>
            <div className="cart-right">

            </div>

        </div>
    )
}
