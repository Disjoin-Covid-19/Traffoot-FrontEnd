import AuthContext from "./auth.context";
import { useContext } from "react";

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    return ctx;
}