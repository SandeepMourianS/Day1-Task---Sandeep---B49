import React, { createContext } from 'react'
import { maintain } from '../../Diet/diet';

const dietContext = createContext();

function ContextProvider( {children} ) {

    const defaultDiet = () =>{
        const diet = {};
        for (let i = 1 ; i < maintain.length + 1 ; i++){
          diet[i] = 0;
        }
        return diet;  
    }

  //state to be update
  const [dietItems , setDietItems] = useState(defaultDiet());
  //total amount
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
  //uncheck
  const sub = (id) => {
    setDietItems((prev) => ({...prev, [id] : prev[id] - 1}));
    }
  
  //checked
  const add = (id) => {
    setDietItems((prev) => ({...prev, [id] : prev[id] + 1}));
  }

  return (
    <dietContext.Provider value={{dietItems, add, sub, totalDietAmount}}>
      {children}
    </dietContext.Provider>
  )
}

export { ContextProvider , dietContext }