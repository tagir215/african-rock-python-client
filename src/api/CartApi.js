import axios from "axios";
import {baseURLServer} from "../config";
import Cookies from "js-cookie";
const cookieName = "sessionId"

export async function addToCart(cartItem){
    let cookie = setCookie();
    cartItem.sessionId = cookie;
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
    let cookie = setCookie();
    cartItem.sessionId = cookie;
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
    let cookie = setCookie();
    const url = `${baseURLServer}/api/v1/cart/clear?cookie=${cookie}`;
    return axios.post(url,null,{withCredentials:true})
    .then(response=>{
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        throw error; 
    });
}

export async function viewCart(){
    let cookie = setCookie();
    const url = `${baseURLServer}/api/v1/cart/view?cookie=${cookie}`;

    return axios.get(url,null,{withCredentials:true})
    .then(response=>{
        return response.data;
    })
    .catch(error=>{
        console.log(error);
        throw error;
    })
}

export async function getSize(){
    let cookie = setCookie();
    const url = `${baseURLServer}/api/v1/cart/get-size?cookie=${cookie}`;
    
    return axios.get(url,null,{withCredentials:true})
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
        Cookies.set(cookieName,generateUniqueSessionId(),
        {
            expires:1, 
            secure:false,
            sameSite:"None"
        })
        cookie = Cookies.get(cookieName);
    }
    return cookie;
}

function generateUniqueSessionId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000000);
  const sessionId = `${timestamp}_${randomNum}`;
  return sessionId;
}