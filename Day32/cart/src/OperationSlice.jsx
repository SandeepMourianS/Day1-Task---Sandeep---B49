import { createSlice } from '@reduxjs/toolkit';
import { product } from './product';

const defaultCart = {};
  for (let i = 1; i < product.length + 1; i++) {
    defaultCart[i] = 0;
}
console.log(defaultCart);

export const operationSlice = createSlice({
  name: 'operation',
  initialState: {
    cartItems: defaultCart,
    totalAmount: 0,
  },
  reducers: {
    add: (state, action) => {
      const  id  = action.payload;
      console.log(id);
      return { 
          ...state,
          cartItems : {
            ...state.cartItems,
            [id]: state.cartItems[id] + 1
        },
      };
    },
    sub: (state, action) => {
      const  id  = action.payload;
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [id]: state.cartItems[id] - 1, // Change +1 to -1
        },
      };
    },    
    totalCartAmount: (state) => {
      let totalAmount = 0;
      for (let item in state.cartItems) {
        if (state.cartItems[item] > 0) {
          let itemInfo = product.find((product) => product.id === Number(item));
          totalAmount += state.cartItems[item] * itemInfo.price;
        }
      }
      return {
        ...state,
        totalAmount,
      };
    },
    // updateCart: (state, action) => {
    //   const { id, newAmount } = action.payload;
    //   console.log("id" , id);
    //   return {
    //     ...state,
    //     cartItems: {
    //       ...state.cartItems,
    //       [id]: newAmount,
    //     },
    //   };
    // },
    removeItem: (state, action) => {
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
  },
});

export const {
  totalCartAmount,
  updateCart,
  sub,
  add,
  removeItem,
} = operationSlice.actions;

export default operationSlice.reducer;