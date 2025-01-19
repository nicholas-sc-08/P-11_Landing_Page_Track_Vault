import { createContext, useState } from "react";
import { useRef } from "react";
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {    

      const inicio_ref = useRef(null);
      const produtos_ref = useRef(null);
      const imprensa_ref = useRef(null);
      const proximos_eventos_ref = useRef(null);

    return (
        <GlobalContext.Provider value={{
        
        inicio_ref,
        produtos_ref,
        imprensa_ref,
        proximos_eventos_ref
        
        }}>
            {children}
        </GlobalContext.Provider>
    )
}