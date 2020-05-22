import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NewHabit from "../Components/NewHabit";
import ViewHabit from "../Components/ViewHabit";
import HabitCheckForm from "../Components/HabitCheckForm";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      dayWeek: "",
      weekday: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  }

  componentDidMount() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let newdate = day + "-" + month + "-" + year;
    let dayWeek = this.state.weekday[date.getDay()];
    this.setState({
      date: newdate,
      dayWeek: dayWeek,
    });
  }
  render() {
    const { user_id, userName, userSurname } = this.props.location.state.data;
    const { dayWeek, date } = this.state;
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-2" id="asideArea">
            <h1>{dayWeek}</h1>
            <h3>
              Welcome: {userName} {userSurname}
            </h3>
          </div>
          <div className="col-lg-7">
            <div className="App-body">
              <HabitCheckForm user={user_id} date={date} />
            </div>
          </div>
          <div className="col-lg-3" id="asideArea">
            <NewHabit user={user_id} date={date} />
            <ViewHabit user={user_id} date={date} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
