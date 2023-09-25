import React , { createContext , useState } from "react";

export const DataContext = createContext();

export function ContextProvider({children}){

    const [dataSource, setDataSource] = useState([]);

    console.log("data source Context" ,dataSource);

    return(
      <DataContext.Provider value={{dataSource , setDataSource}}>
        {children}
      </DataContext.Provider>
    )
}

// export { ContextProvider , DataContext }