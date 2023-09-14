import React, { createContext, useState } from 'react';
import { product } from './product';
//create context
const cartContext = createContext();

function ContextProvider({ children }) { 
  
  //value for cartitem initially
  const defaultCart = () =>{
    const cart = {};
    for (let i = 1 ; i < product.length + 1 ; i++){
      cart[i] = 0;
    }
    return cart;
  }
  //state to be update
  const [cartItems , setCartItems] = useState(defaultCart());
  //total amount
  const totalCartAmount = () =>{
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0){
        let itemInfo = product.find((product)=> product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  } 
  //update cart
  const updateCart = (newAmount , id) => {
    setCartItems((prev) => ({...prev , [id] : newAmount}));
  }
  //subract cart item from cart
  const sub = (id) => {
    setCartItems((prev) => ({...prev, [id] : prev[id] - 1}));
    }
  
  //add cart item to cart
  const add = (id) => {
    setCartItems((prev) => ({...prev, [id] : prev[id] + 1}));
  }
  //remove cart item
  const removeItem = (id) => {
    const item = product.find((item)=> item.id === id)
    if (item){
      setCartItems((prev) => ({...prev, [id] : 0}) );
    }
  }

  return (
    <cartContext.Provider value={{updateCart ,cartItems, add, sub , removeItem , totalCartAmount}}>
      {children}
    </cartContext.Provider>
  )
}

export { ContextProvider, cartContext }