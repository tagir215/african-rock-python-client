import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./OverviewModal.css";
import { setOpen } from "../../redux/ModalSlice";
import { addToCart } from "../../api/CartApi";
import { setSize } from "../../redux/ShoppingCartSlice";


export default function OverviewModal() {
    const modalState = useSelector(state => state.modal);
    const computerState = useSelector(state=> state.computer);
    const product = modalState.selectedProduct;
    const dispatch = useDispatch();

    if (modalState.open) {
        document.body.classList.add("modal-open");
        console.log(modalState);
    }

    function close() {
        dispatch(setOpen(false));
        document.body.classList.remove("modal-open");
    }

    function innerClick(event) {
        event.stopPropagation();
    }

    const extractComponentInfo = (component) => {
        return {
            name: component.name,
            price: component.price,
            url: component.url
        };
    };

    function handleAddToCart(id){
        addToCart(id)
        .then(response=>{
            dispatch(setSize(response.data))
        })
        close();
    }

    const componentsToDisplay = Object.keys(product)
        .filter(key => typeof product[key] === "object" && product[key]?.url)
        .map(key => extractComponentInfo(product[key]));

    return (
        <div>
            {modalState.open && (
                <div className="modal-div" onClick={close}>
                    <div className="modal-window" onClick={innerClick}>
                        <img id="modal-x" src={process.env.PUBLIC_URL+"/x.png"} alt="" onClick={close}></img>
                        <div className="modal-grid-item left">
                        {componentsToDisplay.map((component, index) => (
                            <div className="modal-component-div" key={index}>
                                    <a href={component.url} target="_blank" className="modal-link">
                                    <div>
                                        <span className="modal-header">{component.name}</span>
                                    </div>
                                    <div>
                                        <span className="modal-title">Price:</span>
                                        <span className="modal-text price-color">{component.price+"€"}</span>
                                    </div>
                                </a>
                                </div>
                        ))}
                        </div>
                        <div className="modal-grid-item right">
                            <h2>{"Type: "+computerState.type}</h2>
                            <h4>{"Tier: "+computerState.tier}</h4>
                            <span>{"OS: "+computerState.os}</span>
                            <div><span className="modal-price">Total Price:</span> <span className="modal-price price-color">{product.combinedPrice+"€"}</span></div>
                            <button className="add-to-cart-button" onClick={()=>handleAddToCart(product.id)}>ADD TO CART</button>
                        </div>
                     

                    </div>
                </div>
            )}
        </div>
    );
}
