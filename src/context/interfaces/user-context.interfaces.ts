import * as React from "react";

export interface Perfil {
    name: string;
    registered: string;
}

export interface UserContextProviderProps {
    children: React.ReactNode;
}

export interface UserContextType {
    usuario: Perfil | null;
    setUsuario: (usuario: Perfil | null) => void;
}