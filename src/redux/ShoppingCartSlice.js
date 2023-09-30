import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size:0, 
  products:[],
}

export const modalSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setProducts: (state,action) => {
      state.products = action.payload;
    },
    clear: (state)=>{
      state.products = [];
    }
    
  },
})

export const { setSize, setProducts, clear } = modalSlice.actions;

export default modalSlice.reducer

