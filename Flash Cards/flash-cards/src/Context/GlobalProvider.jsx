import { CardProvider } from "./CardContext";
import { AtualProvider } from "./AtualCard";

export function GlobalProvider ({children}){
    return(
        <AtualProvider>
            <CardProvider>
                {children}
            </CardProvider>
        </AtualProvider>
    );
}