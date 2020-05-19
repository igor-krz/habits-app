import React from "react";
import "./App.css";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//components
import Navigation from "./Components/Navigation";

//containers
import RegisterPage from "./Containers/RegisterPage";
import LoginPage from "./Containers/LoginPage";
import Dashboard from "./Containers/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
