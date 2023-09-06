import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux"
import { getSize } from "../../api/CartApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSize } from "../../redux/ShoppingCartSlice";
import baseURL from "../../config";


let initiated = false;
export default function Navbar() {
    const cartState = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!initiated){
            getSize()
            .then((data)=>{
                dispatch(setSize(data));
            })
            .catch((error)=>{
                console.log(error);
            })
            initiated = true;
        }
    },[])

    return (
        <>
        <header className="App-header">
            <a href={baseURL}>
                <img className='logo-image' src={process.env.PUBLIC_URL + "/logo4.png"} alt=""></img>
            </a>
            <div className="deliver-div">
                <img className='deliver-location' src={process.env.PUBLIC_URL + "/location.png"}></img>
                <div>
                    <span className="deliver-span1">Deliver to</span>
                    <span className="deliver-span2">Finland</span>
                </div>
            </div>
            
            <div className="header-filler"></div>
            <div>
                <a id="sign-in-button" href={baseURL+"/login"}>
                    sign in
                </a>
            </div>
            <div className="cart">
                <a href={baseURL+"/cart"}>
                    <img id="cart-img" src={process.env.PUBLIC_URL + "/Cart.png"} alt="" />
                </a>
                <span id="cart-number">{cartState.size}</span>
            </div>
        </header>    
        

<div className="space"></div>
        </>
    )
}