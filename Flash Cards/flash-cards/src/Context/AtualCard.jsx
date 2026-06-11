import { createContext, useState } from "react";

export const AtualCardContext = createContext();

export function AtualProvider({children}){
    const [AtualCard, setAtualCard] = useState(0);
    return(
        <AtualCardContext.Provider value={{AtualCard, setAtualCard}}>
            {children}
        </AtualCardContext.Provider>
    );
}