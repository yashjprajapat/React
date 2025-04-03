import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);    //mutating the state
    },
    removeItem: (state) => {                /* Action not reqd */ 
      state.items.pop();
    },
    clearCart: (state) => {                 /* Action not reqd */ 
      state.items.length = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
