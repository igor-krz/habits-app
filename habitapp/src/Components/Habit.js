import React, { Component } from "react";
import Streak from "./Streak";

class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitHabit: "",
      complete: false,
    };
  }

  handleSubmit = (event) => {
    const name = event.target.name;
    console.log(name);
  };

  handleDelete = (event) => {
    const habitID = this.props.id;

    fetch("habitapi/deletehabit", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        habit_id: habitID,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then(this.refreshPage);
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  handleSubmit = (e) => {
    // console.log(this.props.id);
    // this.setState({ submitHabit: "submitted" });
    const data = {
      complete: this.props.date,
    };
    console.log(data);
    let habit_id = this.props.id;
    fetch("/habitapi/addtime/" + habit_id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => this.setState({ submitHabit: "submitted" }))
      .catch((error) => {
        console.log("Error:", error);
      });
    window.location.reload(false);
    e.preventDefault();
  };

  render() {
    return (
      <div className="todaysTask">
        <div className="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">
              <label htmlFor={this.props.name}>{this.props.name}</label>
            </span>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-success"
              type="button"
              key={this.props.id}
              name={this.props.name}
              id={this.state.submitHabit}
              onClick={this.handleSubmit}
            >
              ✔
            </button>
            <button
              onClick={this.handleDelete.bind(this, this.props.id)}
              className="btn btn-outline-danger"
              type="button"
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Habit;
