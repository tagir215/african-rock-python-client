import React from "react";
import "./Selection.css"
export default function Selection({selections}){
    
    return (
        <div className="selection-div">
            {selections && selections.map((selection,index)=>{
                return(
                    <div className="selection" key={index} onClick={selection.handleClick}>
                        <span>{selection.span}</span>
                    </div>
                )
            })}
        </div>
    )
}