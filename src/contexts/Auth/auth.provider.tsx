import React, { useState, useCallback, useEffect } from 'react';
import AuthContext from './auth.context';
import * as FootTrackAPI from 'api/api.foottrack';
import { FTAxios } from 'api/api.foottrack';
import { useSerializedAuth } from './auth.hooks';

interface Props { }

const AuthProvider: React.FC<Props> = ({ children }) => {
    const {
        storedUsername,
        storedToken,
        serializeAuth,
    } = useSerializedAuth();

    const [username, setUsername] = useState(storedUsername);
    const [token, setToken] = useState(storedToken);
    const [authLoading, setAuthLoading] = useState(false);

    useEffect(() => {
        FTAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }, [token])

    const register = useCallback(async (username: string, password: string) => {
        setAuthLoading(true);

        try {
            await FootTrackAPI.register(username, password);
            
            
        } catch (error) {
            console.log('error registering', error);
        }
    }, [])

    const login = useCallback(async (username: string, password: string) => {
        setAuthLoading(true);

        try {
            const response = await FootTrackAPI.login(username, password);
            const { token } = response.data;
            setToken(token);
            setUsername(username);
            serializeAuth(username, token)
        
        } catch (error) {
            console.log('error logging in', error);
        } finally {
            setAuthLoading(false)
        }

    }, [serializeAuth])

    return (
        <AuthContext.Provider value={{
            token,
            authLoading,
            username,
            register,
            setToken,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;