import React from 'react';
import { useAuth } from "contexts/Auth/auth.hooks";
import { Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {

}

const PrivateRoute: React.FC<Props> = (props) => {
    const { token } = useAuth();
    
    if (token) return (
        <Route {...props} />
    )

    return (
        null
    );
};

export default PrivateRoute;
