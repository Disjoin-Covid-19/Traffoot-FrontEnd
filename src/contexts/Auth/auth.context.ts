import React from 'react';

interface IAuthState {
    authLoading: boolean;
    token: string | undefined;
    username: string | undefined;
}

interface IAuthActions {
    setToken(t: string):void;
    login(username: string, password: string): void;
    logout(): void;
    register(username: string, password: string): void;
}

const AuthContext = React.createContext<IAuthState & IAuthActions>({} as any);

export default AuthContext;