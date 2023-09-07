import axios from "axios";
import {baseURLServer} from "../config";

export async function registerAccount(token){
    return axios.post(baseURLServer+"/api/v1/user/registration",token)
}


export async function loginAccount(token){
    return axios.post(baseURLServer+"/api/v1/user/login",token)
}