import axios from "axios";
import {baseURLServer} from "../config";
export async function addToCart(id){
    return axios.post(baseURLServer+"/api/v1/cart/add/"+id)
    .then(response=>{
        return response;
    })
    .catch(error => {
        console.log(error);
        throw error; 
    });
}

export async function removeFromCart(id){
    return axios.post(baseURLServer+"/api/v1/cart/remove/"+id)
    .then(response=>{
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        throw error; 
    });
}


export async function clearCart(){
    return axios.post(baseURLServer+"/api/v1/cart/clear")
    .then(response=>{
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        throw error; 
    });
}

export async function viewCart(){
    return axios.get(baseURLServer+"/api/v1/cart/view")
    .then(response=>{
        return response.data;
    })
    .catch(error=>{
        console.log(error);
        throw error;
    })
}

export async function getSize(){
    return axios.get(baseURLServer+"/api/v1/cart/get-size")
    .then(response=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error)
        return error;
    })
}