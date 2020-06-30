import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Workspace from "./components/workspace/workspace";
import Navigation from "./components/generic/Navigation";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  const props = { name: "Shashank 2", productName: "OpneBI" };
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => <Home {...props}></Home>}
          ></Route>
          <Route
            path="/ws"
            render={() => <Workspace {...props}></Workspace>}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
