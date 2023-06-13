import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }){
    const [loggedIn, setLoggedIn] = useState(true);
    return (
        <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
            { children }
        </AppContext.Provider>
    )
}

