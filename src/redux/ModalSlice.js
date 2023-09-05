import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open:false, 
  selectedProduct:{},
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setSelectedProduct:(state, action) =>{
      state.selectedProduct = action.payload;
    }
  },
})

export const { setOpen, setSelectedProduct } = modalSlice.actions;

export default modalSlice.reducer

