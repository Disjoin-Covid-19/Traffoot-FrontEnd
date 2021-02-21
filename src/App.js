import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./views/Home";

import { Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

const PUBLIC_TYPE_ROUTE = 'public';
const PRIVATE_TYPE_ROUTE = 'private';

const routes = [
    { path: '/', component: Home, exact: true, type: PUBLIC_TYPE_ROUTE },
    { path: '/map', component: Map, exact: true, type: PRIVATE_TYPE_ROUTE },
];

function App() {
    return (
        <BrowserRouter>
            {routes.map(({ type, ...props }) => 
                type === PUBLIC_TYPE_ROUTE 
                    ? <Route key={props.path} {...props} />
                    : <PrivateRoute key={props.path} {...props} />
            )}

        </BrowserRouter>
    );
}

export default App;
