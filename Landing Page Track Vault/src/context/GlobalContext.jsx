import { createContext, useState } from "react";
import { useRef } from "react";
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {    

      const inicio_ref = useRef(null);

    return (
        <GlobalContext.Provider value={{
        
        inicio_ref
        
        }}>
            {children}
        </GlobalContext.Provider>
    )
}