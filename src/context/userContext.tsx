import {createContext, useEffect, useMemo, useState} from "react";
import type {Perfil, UserContextProviderProps, UserContextType} from "./interfaces/user-context.interfaces.ts";

const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [usuario, setUsuario] = useState<Perfil | null>(null);

    useEffect(() => {
        setUsuario({
            name: "Henry",
            registered: "2021-01-01"
        })
    }, []);

    const contextValue: UserContextType = useMemo(() => ({
        usuario, setUsuario
    }), [usuario]);

    return (<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>)
}

export {UserContext, UserContextProvider};