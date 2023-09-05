import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type:"TYPE",
  tier:"TIER",
  os:"OS",
  products:[]
}

export const computerSlice = createSlice({
  name: 'computer',
  initialState,
  reducers: {

    setComputerType: (state, action) => {
      state.type = action.payload;
    },
    setComputerTier: (state, action) => {
      state.tier = action.payload;
    },
    setComputerOS: (state, action) => {
      state.os = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProducts: (state, action) =>{
      const newProducts = [...state.products,...action.payload];
      state.products = newProducts;
    }
     
  },
})

export const { setComputerType, setComputerTier, setComputerOS, setProducts, addProducts } = computerSlice.actions;

export default computerSlice.reducer

