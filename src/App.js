import React from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Assignment1 from "./components/assignment-1";
import Assignment2 from "./components/assignment-2";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/assignment-1" exact component={Assignment1} />
        <Route path="/assignment-2" exact component={Assignment2} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;