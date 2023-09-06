import axios from "axios";

import {baseURL} from "../config";

export async function getComputers(payload){
    return axios.post(baseURL + "/api/v1/getComputers/", payload)
    .then(response => {
        return response.data; 
    })
    .catch(error => {
        console.log(error);
    });
}
