import React from "react";
import "./LoginForm.css";
import { loginAccount } from "../../api/UserApi";
import { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';

export default function LoginForm(){
    const [message, setMessage] = useState("");
    const navigate = useNavigate()


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
        loginAccount(token).then((response)=>{
            setMessage(response.data);
            navigate('/');
        })
        .catch(error=>{
            setMessage(error.response.data)
        })
    }

    return(
        <div className="login-div">
            <div className="login-form">
                <input type="input" placeholder="Email / Username"></input>
                <input type="input" placeholder="password"></input>
                <input type="submit" value={"login"} onClick={handleLoginButton}></input>
                <Link to={"/registration"}>
                    <input className="metro" type="submit" value={"register"}></input>
                </Link>
                <span>{message}</span>
            </div>
        </div>
    )
}