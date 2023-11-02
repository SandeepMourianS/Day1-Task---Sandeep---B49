import React, { createContext , useState } from 'react'
import { maintain } from '../Diet/diet';

const dietContext = createContext();

function ContextProvider( {children} ) {

  const defaultDiet = () =>{
    const diet = {};
    for (let i = 1 ; i < value.length + 1 ; i++){
      diet[i] = 0;
    }
    return diet;  
}
  //states
  const [value, setValue] = useState(maintain);
  const [dietItems , setDietItems] = useState(defaultDiet());

  //total calories
  const totalDietAmount = () =>{
    let totalAmount = 0;
    for (let item in dietItems) {
      if (dietItems[item] > 0){
        let itemInfo = maintain.find((maintain)=> maintain.id === Number(item));
        totalAmount += dietItems[item] * itemInfo.calories
      }
    }
    return totalAmount;
  } 

  
  //checked
  const add = (id) => {
    setDietItems((prev) => ({...prev, [id] : prev[id] + 1}));
  }

  return (
    <dietContext.Provider value={{ dietItems, add, totalDietAmount , setDietItems , setValue, value}}>
      {children}
    </dietContext.Provider>
  )
}

export { ContextProvider , dietContext }