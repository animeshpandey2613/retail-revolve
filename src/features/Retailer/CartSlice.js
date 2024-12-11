import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct:(state, action)=>{
        state.cartData.push(action.payload);
    },
    removeProduct:(state, action)=>{
        state.cartData.filter((item, i) => i !== action.payload);
    }
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
