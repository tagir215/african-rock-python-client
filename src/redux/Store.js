import { configureStore } from "@reduxjs/toolkit";
import ComputerSlice from "./ComputerSlice";
import ModalSlice from "./ModalSlice";
import ShoppingCartSlice from "./ShoppingCartSlice";
export default configureStore({
    reducer:{
        computer:ComputerSlice,
        modal:ModalSlice,
        cart:ShoppingCartSlice,
    }
})