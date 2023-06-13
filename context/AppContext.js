import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }){
    const [test, setTest] = useState("testing context");
    return (
        <AppContext.Provider value={{ test,setTest }}>
            { children }
        </AppContext.Provider>
    )
}

