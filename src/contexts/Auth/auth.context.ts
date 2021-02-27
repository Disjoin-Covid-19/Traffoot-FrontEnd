import React from 'react';

interface IAuthState {
    loggingIn: boolean;
    token: string | undefined;
    username: string | undefined;
}

interface IAuthActions {
    setToken(t: IAuthState["token"]):void;
    login(username: string, password: string): void;
}

const AuthContext = React.createContext<IAuthState & IAuthActions>({} as any);

export default AuthContext;