import AuthContext from "./auth.context";
import { useContext, useMemo, useCallback } from "react";

const TOKEN_LIFETIME = 3600 * 1000;

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    return ctx;
}

export const useSerializedAuth = () => {
    const { storedUsername, storedToken } = useMemo(() => {
        const timestamp = Number(localStorage.getItem('auth_timestamp'));
        if (timestamp && Date.now() - timestamp < TOKEN_LIFETIME) {
            return {
                storedUsername: localStorage.getItem('auth_username') ?? undefined,
                storedToken: localStorage.getItem('auth_token') ?? undefined
            };
        }       
        localStorage.removeItem('auth_timestamp');
        localStorage.removeItem('auth_username');
        localStorage.removeItem('auth_token');

        return {
            storedUsername: undefined,
            storedToken: undefined,
        }
    }, []);

    const serializeAuth = useCallback((username: string, token: string) => {
        localStorage.setItem('auth_timestamp', Date.now().toString());
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_username', username)
    }, []);

    const clearSerialisedAuth = useCallback(() => {
        localStorage.removeItem('auth_timestamp');
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_username');
    }, [])

    return {
        storedUsername,
        storedToken,
        serializeAuth,
        clearSerialisedAuth
    }

}