import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./OverviewModal.css";
import { setOpen } from "../../redux/ModalSlice";
import { addToCart } from "../../api/CartApi";
import { setSize } from "../../redux/ShoppingCartSlice";
import ComponentMapper from "../mapper/ComponentMapper"

export default function OverviewModal() {
    const modalState = useSelector(state => state.modal);
    const computerState = useSelector(state=> state.computer);
    const cartState = useSelector(state=>state.cart);
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


    function handleAddToCart(product){
        addToCart(ComponentMapper.productToCartItem(product))
        .then(response=>{
            dispatch(setSize(cartState.size+1))
        })
        close();
    }

    

    return (
        <div>
            {modalState.open && (
                <div className="modal-div" onClick={close}>
                    <div className="modal-window" onClick={innerClick}>
                        <img id="modal-x" src={process.env.PUBLIC_URL+"/x.png"} alt="" onClick={close}></img>
                        <div className="modal-grid-item left">
                        {product.components.map((component, index) => (
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
                            <button className="add-to-cart-button" onClick={()=>handleAddToCart(product)}>ADD TO CART</button>
                        </div>
                     

                    </div>
                </div>
            )}
        </div>
    );
}
