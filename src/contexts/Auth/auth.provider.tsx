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
    const [loggingIn, setLoggingIn] = useState(false);

    useEffect(() => {
        FTAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }, [token])

    const login = useCallback(async (username: string, password: string) => {
        setLoggingIn(true);

        const response = await FootTrackAPI.login(username, password);

        if (response.status === 200) {
            const { token } = response.data;
            setToken(token);
            setUsername(username);
            serializeAuth(username, token)
        }

    }, [serializeAuth])

    return (
        <AuthContext.Provider value={{
            token,
            loggingIn,
            username,
            setToken,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;