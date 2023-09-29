import { createSlice } from '@reduxjs/toolkit';
import { product } from './product';

const defaultCart = {};
  for (let i = 1; i < product.length + 1; i++) {
    defaultCart[i] = 0;
}

//Created slice using create slice
export const operationSlice = createSlice({
  name: 'operation',
  initialState: { //State
    cartItems: defaultCart,
    totalAmount: 0,
  },
  reducers: {  //reducer is created
    totalCartAmount: (state, action) => {
      let totalAmount = 0;
      for (let item in state.cartItems) {
        console.log(state.cartItems[item]);
        if (state.cartItems[item] > 0) {
          let itemInfo = product.find((product) => product.id === Number(item));
          console.log(itemInfo);
          totalAmount += state.cartItems[item] * itemInfo.price;
        }
      }
      return {
        ...state,
        totalAmount
      };
    },
    updateCart: (state, action) => {  //update the cart
      const { id, newAmount } = action.payload;
      console.log("id" , id);
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [id]: newAmount,
        },
      };
    },
    removeItem: (state, action) => { //remove the cart
      const  id  = action.payload;
      const item = product.find((item) => item.id === id);
      if (item) {
        return {
          ...state,
          cartItems: {
          ...state.cartItems,
          [id]: 0,
          },
        };
      }
      return state;
    },
  }
});

export const {
  totalCartAmount,
  updateCart,
  removeItem,
} = operationSlice.actions;

export default operationSlice.reducer;