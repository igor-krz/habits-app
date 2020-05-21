import React, { Component } from "react";
import Streak from "./Streak";

class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitHabit: false,
    };
  }
  handleSubmit = (e) => {
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
  };

  handleSubmit = (event) => {
    const name = event.target.name;
    console.log(name);
  };

  render() {
    return (
      <div>
        {/* <h1>{this.props.name}</h1> */}
        <label for={this.props.name}>{this.props.name}</label>
        <br></br>
        <input
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
      </div>
    );
  }
}

export default Habit;
