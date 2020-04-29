import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./header";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
// import "./sass/main.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Home />
      </Switch>
    </div>
  );
}

export default App;
