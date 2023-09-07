import axios from "axios";

import {baseURLServer} from "../config";

export async function getComputers(payload){
    return axios.post(baseURLServer + "/api/v1/getComputers/", payload)
    .then(response => {
        return response.data; 
    })
    .catch(error => {
        console.log(error);
    });
}
