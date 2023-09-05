import axios from "axios";

const baseURL = "https://arp200-f1d4c58ab3e8.herokuapp.com"

export async function getComputers(payload){
    return axios.post(baseURL + "/api/v1/getComputers/", payload)
    .then(response => {
        return response.data; 
    })
    .catch(error => {
        console.log(error);
        throw error; 
    });
}
