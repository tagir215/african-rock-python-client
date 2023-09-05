import React from "react";
import "./LoginForm.css";
import { loginAccount } from "../../api/UserApi";
import { useState } from "react";

export default function LoginForm(){
    const [message, setMessage] = useState("");
    const handleLoginButton = ()=>{
        const inputs = document.getElementsByTagName("input");
        for(let i=0; i<inputs.length; i++){
            if(!inputs[i].value){
                alert("missing fieilds br");
                return;
            }
        }
        const token = {
            userName:inputs[0].value,
            password:inputs[1].value
        }
        loginAccount(token).then((data)=>{
            setMessage(data);
        })
    }

    return(
        <div className="login-div">
            <div className="login-form">
                <input type="input" placeholder="Email / Username"></input>
                <input type="input" placeholder="password"></input>
                <input type="submit" value={"login"} onClick={handleLoginButton}></input>
                <a href="http://localhost:3000/registration">
                    <input className="metro" type="submit" value={"register"}></input>
                </a>
                <span>{message}</span>
            </div>
        </div>
    )
}