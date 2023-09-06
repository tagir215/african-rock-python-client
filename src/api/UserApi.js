import axios from "axios";
import {baseURL} from "../config";

export async function registerAccount(token){
    return axios.post(baseURL+"/api/v1/user/registration",token)
}

export async function loginAccount(token){
    return axios.post(baseURL+"/api/v1/user/login",token)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        return error.response.data;
    })
}