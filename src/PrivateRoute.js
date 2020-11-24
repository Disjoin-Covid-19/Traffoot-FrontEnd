import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import useAuth from '../hooks/context/useAuth';

const PrivateRoute = ({
    component: Component,
    allowGuest = false,
    ...rest
}) => {
    // const { user } = useAuth();

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to homepage
    // In case of an event, though, redirect them to /e/:id page
    return (
        <Route {...rest} render={(props) => (
                // user ? 
                <Component {...props} /> 
                // : <Redirect to='/' />
            )}
        />
    );
};

export default PrivateRoute;
