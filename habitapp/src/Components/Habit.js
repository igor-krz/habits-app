import React, { Component } from "react";
import Streak from "./Streak";

class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitHabit: false,
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

    e.preventDefault();
  };

  render() {
    return (
      <div>
        {/* <h1>{this.props.name}</h1> */}
        <label for={this.props.name}>{this.props.name}</label>
        <br></br>
        <input
          className={this.state.submitHabit}
          type="button"
          key={this.props.id}
          name={this.props.name}
          value={this.props.name}
          onClick={this.handleSubmit}
        />
        <Streak
          complete={this.props.complete}
          current_streak={this.props.current_streak}
          highest_streak={this.props.highest_streak}
          date={this.props.date}
        />
        <button onClick={this.handleDelete.bind(this, this.props.id)}>
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  }
}

export default Habit;
