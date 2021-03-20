import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/Home";
import Map from "./views/Map";

import { Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "contexts/Auth/auth.provider";
import AboutUs from "views/AboutUs";

enum RouteType {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

const routes = [
    { path: '/', component: Home, exact: true, type: RouteType.PUBLIC },
    // TODO: lazy loading non home components
    { path: '/map', component: Map, exact: false, type: RouteType.PUBLIC },
    { path: '/about', component: AboutUs, exact: false, type: RouteType.PUBLIC }
];

const App: React.FC<{}> = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    {routes.map(({ type, ...props }) =>
                        type === RouteType.PUBLIC
                            ? <Route key={props.path} {...props} />
                            : <PrivateRoute key={props.path} {...props} />
                    )}
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
