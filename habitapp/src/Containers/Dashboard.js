import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NewHabit from "../Components/NewHabit";
import ViewHabit from "../Components/ViewHabit";
import Habit from "../Components/Habit";
class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.location.state.data);
  }
  render() {
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-2" id="asideArea"></div>
          <div className="col-lg-8">
            <div className="App-body">
              <NewHabit user={this.props.location.state.data} />
              <ViewHabit user={this.props.location.state.data} />
              <Habit userID={this.props.location.state.data} />
            </div>
          </div>
          <div className="col-lg-2" id="asideArea"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
