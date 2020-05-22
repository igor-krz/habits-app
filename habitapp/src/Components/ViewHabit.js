import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Streak from "./Streak";


class ViewHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitData: [],
      complete: false,
    };
  }
  componentDidMount() {
    fetch(`/habitapi/${this.props.user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ habitData: data });
      });
  }

  getStreak = (string) => {
    let split =  string.split("-")
    return parseInt(split[3])
   }
  render() {
    return (
      <div>
        {this.state.habitData ? (
          this.state.habitData.map((object) => (
            <div key={object}>
              {object.habitName}
              <br />
              {object.frequency}
              <br />
              {object.complete}{" "}
              <Streak
              habit={object.habit_id}
                date={this.props.date}
                complete={object.complete}
                current_streak={this.getStreak(object.current_streak)}
                highest_streak={this.getStreak(object.highest_streak)}
                frequency={object.frequency}
              />
            </div>
          ))
        ) : (
          <h1>Data logged in </h1>
        )}
      </div>
    );
  }
}

export default ViewHabit;
