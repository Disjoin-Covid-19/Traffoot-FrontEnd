import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MapView from "./components/MapView/MapView";
import ListView from "./components/ListView/ListView";
import Map from "./components/Map/Map";
import Signup from "./components/Signup/Signup";
import NavBar from "./common/NavBar";

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
          <Route path="/Home" component={Home} />
          <Route path="/Map" component={Map} />
          <Route path="/Mapview" component={MapView} />
          <Route path="/List" component={ListView} />
          <Route path="/CreateAccount" component={Signup} />
          <Route path="/nav" component={NavBar} />
          <Redirect from="/" exact to="/Home" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
