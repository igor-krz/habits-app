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
            <Route exact path="/" component={LoginPage} />

            <Route exact path="/register" component={RegisterPage} />

            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
