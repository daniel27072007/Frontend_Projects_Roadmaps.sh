import { createContext, useState } from "react";

export const CardContext = createContext();

export function CardProvider({children}){
    const [EsconderResposta, setEsconderResposta] = useState(true);
    return(
        <CardContext.Provider value={{EsconderResposta, setEsconderResposta}}>
            {children}
        </CardContext.Provider>
    );
}