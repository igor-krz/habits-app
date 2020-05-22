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
            <div className="App-body" id="habitCheckDiv">
              <HabitCheckForm user={user_id} date={date} />
            </div>
          </div>
          <div className="col-lg-3" id="asideArea">
            <div id="aside1">
              <NewHabit user={user_id} date={date} />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              View Completed Habits
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" id="viewHabit">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Completed Habit
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <ViewHabit user={user_id} date={date} />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
