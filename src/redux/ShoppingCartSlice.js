import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size:0, 
}

export const modalSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    
    setSize: (state, action) => {
      state.size = action.payload;
    },
    
  },
})

export const { setSize } = modalSlice.actions;

export default modalSlice.reducer

