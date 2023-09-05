import React from "react";
import { useState } from "react";
import "./RegistrationForm.css"
import {registerAccount} from "../../api/UserApi";


export default function RegistrationForm(){
    const [message, setMessage] = useState("wow");

    const handleClick = ()=>{
        const inputs = document.getElementsByTagName("input");
        for(let i=0; i<inputs.length; i++){
            if(!inputs[i].value){
                alert("missing values man");
                return;
            }
        }
        const token = {
            email:inputs[0].value,
            firstName:inputs[1].value,
            lastName:inputs[2].value,
            password:inputs[3].value,
        }

        registerAccount(token)
        .then((response)=>{
            window.location.href = "/login";
        })
        .catch((error)=>{
            setMessage(error.response.data);
        })
    }
    return(
        <div>
            <div className="registration-form">
                <input type="input" placeholder="email/username"></input>
                <input type="input" placeholder="first name"></input>
                <input type="input" placeholder="last name"></input>
                <input type="input" placeholder="password"></input>
                <input type="input" placeholder="confirm password"></input>
                <input type="button" value={"register"} onClick={handleClick}></input>
                <label>{message}</label>
            </div>
        </div>
    )
}