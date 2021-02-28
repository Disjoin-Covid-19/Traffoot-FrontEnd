import React, { useState, useCallback } from 'react';
import AuthContext from './auth.context';
import * as FootTrackAPI from 'api/api.foottrack';

interface Props { }

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('auth_token') ?? undefined);
    const [username, setUsername] = useState(localStorage.getItem('auth_username') ?? undefined);
    const [loggingIn, setLoggingIn] = useState(false);

    const login = useCallback(async (username: string, password: string) => {
        setLoggingIn(true);

        const response = await FootTrackAPI.login(username, password);

        if (response.status === 200) {
            const { token } = response.data;
            setToken(token);
            setUsername(username);
            localStorage.setItem('auth_token', token);
            localStorage.setItem('auth_username', username)
        }

    }, [])

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