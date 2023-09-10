import { React, useState } from "react";
import "./Grid.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setOpen, setSelectedProduct } from "../../redux/ModalSlice";
import { addProducts } from "../../redux/ComputerSlice";
import { getComputers } from "../../api/ComputerApi";

export default function Grid() {
    const computerState = useSelector(state => state.computer);
    const dispatch = useDispatch();
    window.addEventListener("scroll", loadMore);
    const [isLoading, setIsLoading] = useState(false);

    function loadMore() {
        if (!isLoading && window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
        setIsLoading(true);
        getComputers(computerState)
            .then((response) => {
                dispatch(addProducts(response));
                setIsLoading(false); 
            })
            .catch((error) => {
            setIsLoading(false);
            });
        }
    }

   

    let products = [];
    if (computerState.products) {
        products = computerState.products;
        console.log(products.length);
    }

    function openModal(product) {
        dispatch(setOpen(true));
        dispatch(setSelectedProduct(product))
    }

    return (
        <div className="grid">
            {products.length > 0 && products.map((product, index) => {
                return (
                    <div key={index} className="product-div" onClick={()=>openModal(product)}>
                        <img className="product-picture" src={"/isomcoms.jpg"} alt="" />
                        <div className="product-info">
                            <span className="type">{"Type: " + computerState.type}</span>
                            <span className="tier">{"Tier: " + computerState.tier}</span>
                            <span className="price">{"Price: " + product.combinedPrice + "€"}</span>
                            <span className="delivery-location">delivery to: Finland</span>
                            <span className="delivery-time">delivery time: 2-3d</span>
                        </div>
                        <div>
                            <div className="component-div">
                                <span className="product-title">Motherboard</span>
                                <span className="component">{product.motherboard.name}</span>
                            </div>
                            <div className="component-div">
                                <span className="product-title">CPU</span>
                                <span className="component">{product.cpu.name}</span>
                            </div>
                            <div className="component-div">
                                <span className="product-title">Case</span>
                                <span className="component">{product.pcCase.name}</span>
                            </div>
                            <div className="component-div">
                                <span className="product-title">GPU</span>
                                <span className="component">{product.gpu.name}</span>
                            </div>
                            <div className="component-div">
                                <span className="product-title">Storage</span>
                                <span className="component">{product.storage.name}</span>
                            </div>
                            <div className="component-div">
                                <span className="product-title">RAM</span>
                                <span className="component">{product.ram.name}</span>
                            </div>
                            <div className="component-div">
                                <span className="product-title">CPU Cooler</span>
                                <span className="component">{product.cpuCooler.name}</span>
                            </div>
                            <div className="component-div">
                                <span className="product-title">powerUnit</span>
                                <span className="component">{product.powerUnit.name}</span>
                            </div>
                            <div className="component-div">
                                <span className="product-title">OS</span>
                                <span className="component">{computerState.os}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="loading-div">
                {isLoading &&  <div className="loading-spinner"></div>}
            </div>
        </div>
    );
}
