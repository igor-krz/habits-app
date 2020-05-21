import React, { Component } from "react";
import Habit from "./Habit";

let toComplete = [];
class HabitCheckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [],
      completeArray: "",
      toComplete: [],
    };
  }
  componentDidMount() {
    fetch(`/habitapi/${this.props.user}`)
      .then((response) => response.json())
      .then((result) =>
        this.setState(
          {
            habits: result,
          },
          () => this.ToComplete()
        )
      );
  }

  async ToComplete() {
    if (this.state.habits.length !== 0) {
      await this.checkComplete();
      this.setState({
        toComplete: toComplete,
      });
    } else {
      console.log("no habits");
    }
  }

  checkComplete = () => {
    this.state.habits.map((object) => {
      if (object.complete[object.complete.length - 1] !== this.props.date) {
        return toComplete.push(object);
      } else {
        console.log("none not completed");
      }
    });
  };


  render() {
    console.log(toComplete);
    return (
      <div>
        {this.state.habits ? (
          this.state.habits.map((object) => (
            <Habit
              date={this.props.date}
              id={object.habit_id}
              complete={object.complete}
              name={object.habitName}
              current_streak={object.current_streak}
              highest_streak={object.highest_streak}
            />
          ))
        ) : (
          <div>
            {" "}
            <h1>No Habits to complete</h1>{" "}
          </div>
        )}
      </div>
    );
  }

}

export default HabitCheckForm;
