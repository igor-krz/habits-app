import React from "react";
import "./App.css";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//components
import Navigation from "./Components/Navigation";

//containers
import HomePage from "./Containers/HomePage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
