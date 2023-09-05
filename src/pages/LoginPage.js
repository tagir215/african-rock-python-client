import React from "react";
import LoginForm from "../components/login/LoginForm";
import Navbar from "../components/navbar/Navbar";

export default function LoginPage(){

    return (
        <div className="login-page">
            <Navbar/>
            <LoginForm/>
        </div>
    )
}