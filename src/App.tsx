import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/Home";
import Map from "./views/Map";

import { Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

const PUBLIC_TYPE_ROUTE = 'public';

const routes = [
    { path: '/', component: Home, exact: true, type: PUBLIC_TYPE_ROUTE },
    { path: '/map', component: Map, exact: false, type: PUBLIC_TYPE_ROUTE },
];

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(({ type, ...props }) =>
                    type === PUBLIC_TYPE_ROUTE
                        ? <Route key={props.path} {...props} />
                        : <PrivateRoute key={props.path} {...props} />
                )}
            </Switch>

        </BrowserRouter>
    );
}

export default App;
