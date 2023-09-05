import React from "react";
import ComputerForm from "../components/computerForm/ComputerForm";
import Navbar from "../components/navbar/Navbar";

export default function FormPage(){
 

    return (
        <div>
            <Navbar/>
            <div className="page">
                <ComputerForm/>
            </div>
        </div>
    )
}