import { useContext } from "react";
import { DataContext } from "../context/createContext";
export function useDataContext() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext debe de estar dentro del provedor");
    }
    return context;
}