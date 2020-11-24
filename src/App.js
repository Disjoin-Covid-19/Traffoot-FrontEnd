import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MapView from "./components/MapView/MapView";
import ListView from "./components/ListView/ListView";
import Map from "./components/Map/Map";
import Signup from "./components/Signup/Signup";
import NavBar from "./common/NavBar";
import PrivateRoute from "./PrivateRoute";

const PRIVATE_TYPE_ROUTE = 'private';
const PUBLIC_TYPE_ROUTE = 'public';

const routes = [
  { path: '/', Component: Home, isExact: true, type: PUBLIC_TYPE_ROUTE },
  { path: '/Home', Component: Home, isExact: false, type: PRIVATE_TYPE_ROUTE },
  { path: '/Map', Component: Map, isExact: true, type: PUBLIC_TYPE_ROUTE },
  { path: '/Mapview', Component: MapView, isExact: true, type: PUBLIC_TYPE_ROUTE },
  { path: '/List', component: ListView, isExact: true, type: PUBLIC_TYPE_ROUTE },
  { path: '/CreateAccount', component: Signup, isExact: false, type: PRIVATE_TYPE_ROUTE },
  { path: '/nav', component: NavBar, isExact: false, type: PRIVATE_TYPE_ROUTE },
];

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <React.Fragment>
      <main className="Container">
        <Switch>
          {/* <Route path="/Home" component={Home} />
          <Route path="/Map" component={Map} />
          <Route path="/Mapview" component={MapView} />
          <Route path="/List" component={ListView} />
          <Route path="/CreateAccount" component={Signup} />
          <Route path="/nav" component={NavBar} />
          <Redirect from="/" exact to="/Home" /> */}
          {routes.map(({ path, Component, type, isExact, ...props }) => {
                    if (type === PUBLIC_TYPE_ROUTE)
                        return (
                            <Route
                                key={path}
                                component={Component}
                                path={path}
                                exact={isExact}
                                {...props}
                            />
                        );
                    if (type === PRIVATE_TYPE_ROUTE) {
                        return (
                            <PrivateRoute
                                key={path}
                                component={Component}
                                path={path}
                                exact={isExact}
                                {...props}
                            />
                        );
                    }
                    return path;
                })}
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
