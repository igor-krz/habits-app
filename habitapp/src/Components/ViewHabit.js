import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Streak from "./Streak";

class ViewHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitData: [],
      displayHabit: "",
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
    let split = string.split("-");
    return parseInt(split[3]);
  };

  getStreakDate = (string) => {
    let split = string.split("-");
    let day = parseInt(split[0])
    let month = parseInt(split[1])
    let year = parseInt(split[2])
    return day+ '-' + month + '-' + year

  }
  render() {
    const logo = this.props.description;
    const logo1 = logo + ".png";
    return (
      <div id="viewHabits">
        {this.state.habitData ? (
          this.state.habitData.map((object) => (
            <div key={object}>
              <div className="input-group" id="viewHabits">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <label>{object.description}</label>
                  </span>
                  <span className="input-group-text">
                    <label htmlFor={object.habitName} className="habitLabel">
                      {object.habitName}
                    </label>
                  </span>
                  <span className="input-group-text">
                    <label>
                      <Streak
                        habit={object.habit_id}
                        date={this.props.date}
                        complete={object.complete}
                        current_streakDate={this.getStreakDate(object.current_streak)}
                        highest_streakDate={this.getStreakDate(object.current_streak)}
                        current_streak={this.getStreak(object.current_streak)}
                        highest_streak={this.getStreak(object.highest_streak)}
                        frequency={object.frequency}
                      />
                    </label>
                  </span>
                </div>
              </div>
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
