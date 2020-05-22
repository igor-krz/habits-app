import React, { Component } from "react";
import ViewHabit from "./ViewHabit";

class Streak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStreak: 0,
      highestStreak: 0,
    };
  }
  componentDidMount() {
    const currentstreakArray = this.props.current_streak.split("-");
    const highestStreak = this.props.highest_streak.split("-");
    console.log("this is being dislayed");
    console.log(currentstreakArray[3]);
    console.log(typeof currentstreakArray);
    this.setState(
      {
        currentStreak: parseInt(currentstreakArray[3]),
        highestStreak: parseInt(highestStreak[3]),
      },
      () => this.checkStreak()
    );
  }

  checkStreak = () => {
    if (this.props.complete.length > 0) {
      const latestDate = this.props.complete[this.props.complete.length - 1];
      const lastDate = new Date(latestDate.split("-").reverse().join("/"));
      const now = new Date(this.props.date.split("-").reverse().join("/"));
      const one_day = 1000 * 60 * 60 * 24;
      const diff = Math.ceil((lastDate.getTime() - now.getTime()) / one_day);
      if (this.props.frequency === "daily" && diff === 1) {
        this.setState(
          {
            currentStreak: this.state.current_streak + 1,
          },
          () => {
            if (this.state.currentStreak > this.props.highest_streak) {
              this.props.highest_streak = this.state.currentStreak;
            } else {
              console.log("not highest");
            }
          }
        );
      }
      if (this.props.frequency === "weekly" && diff === 7) {
        this.setState(
          {
            currentStreak: this.state.current_streak + 1,
          },
          () => {
            if (this.state.currentStreak > this.props.highest_streak) {
              this.props.highest_streak = this.state.currentStreak;
            } else {
              console.log("not highest");
            }
          }
        );
      }
      if (this.props.frequency === "monthly" && diff === 30) {
        this.setState(
          {
            currentStreak: this.state.current_streak + 1,
          },
          () => {
            if (this.state.currentStreak > this.props.highest_streak) {
              this.props.highest_streak = this.state.currentStreak;
            } else {
              console.log("not highest");
            }
          }
        );
      }
      if (
        (this.props.frequency === "daily" && diff !== 1) ||
        (this.props.frequency === "weekly" && diff !== 7) ||
        (this.props.frequency === "monthly" && diff !== 30)
      ) {
        this.setState({
          currentStreak: 0,
        });
      }
    } else {
      console.log("no completed data");
    }
  };

  render() {
    return (
      <div>
        {this.props.complete ? (
          <div>
            {/* <ViewHabit current={this.state.currentStreak}
              highest= {this.state.highestStreak} /> */}
            current : {this.state.currentStreak}
            highest : {this.state.highestStreak}
          </div>
        ) : (
          <div>
            <h1>None</h1>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default Streak;
