import React from "react";
import Navbar from "../components/navbar/Navbar";
import Grid from "../components/productGrid/Grid";
import OverviewModal from "../components/modal/OverviewModal";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { getComputers } from "../api/ComputerApi";
import { useDispatch } from "react-redux";
import { setComputerOS,setComputerTier,setComputerType,setProducts } from "../redux/ComputerSlice";
import { useSelector } from "react-redux";
import "../App.css"
let initiated = false;

export default function GridPage(){
    const computerState = useSelector(state=>state.computer);
    const dispatch = useDispatch();
    const location = useLocation();

    if(!initiated){
        const queryParams = new URLSearchParams(location.search);
        const type = queryParams.get("type");
        const tier = queryParams.get("tier");
        const os = queryParams.get("os");
        dispatch(setComputerType(type));
        dispatch(setComputerTier(tier));
        dispatch(setComputerOS(os));    
        initiated = true;
        getComputers({"type":type,"tier":tier,"os":os})
        .then(data=>{
            dispatch(setProducts(data));
        })
    }

    return (
        <div className="App">
            <Navbar/>
            <div className="loading-div-page">
                {computerState.products.length === 0  &&  <div className="loading-spinner"></div>}
            </div>
            <Grid />
            <OverviewModal/>
        </div>
    )
}