import axios from "axios";
import {baseURLServer} from "../config";
import Cookies from "js-cookie";
const cookieName = "sessionId"

export async function addToCart(cartItem){
    setCookie();

    return axios.post(baseURLServer+"/api/v1/cart/add/",cartItem, {withCredentials:true})
    .then(response=>{
        return response;
    })
    .catch(error => {
        console.log(error);
        throw error; 
    });
}

export async function removeFromCart(cartItem){
   
    return axios.post(baseURLServer+"/api/v1/cart/remove/",cartItem,{withCredentials:true})
    .then(response=>{
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        throw error; 
    });
}


export async function clearCart(){
    return axios.post(baseURLServer+"/api/v1/cart/clear",{withCredentials:true})
    .then(response=>{
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        throw error; 
    });
}

export async function viewCart(){
    return axios.get(baseURLServer+"/api/v1/cart/view",{withCredentials:true})
    .then(response=>{
        return response.data;
    })
    .catch(error=>{
        console.log(error);
        throw error;
    })
}

export async function getSize(){
    return axios.get(baseURLServer+"/api/v1/cart/get-size",{withCredentials:true})
    .then(response=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error)
        throw error;
    })
}

function setCookie(){
    let cookie = Cookies.get(cookieName);
    if(!cookie){
        Cookies.set(cookieName,"testpleasework",
        {
            expires:1, 
            secure:true
        })
        cookie = Cookies.get(cookieName);
    }
}