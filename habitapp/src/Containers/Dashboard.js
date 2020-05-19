import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NewHabit from "../Components/NewHabit";
class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-2" id="asideArea"></div>
          <div className="col-lg-8">
            <div className="App-body">
              <NewHabit />
            </div>
          </div>
          <div className="col-lg-2" id="asideArea"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
