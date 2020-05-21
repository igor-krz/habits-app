import React, { Component } from "react";
import HabitForm from "./HabitForm";

class ListHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toComplete: [
        {
          habitID: 2,
          name: "water",
          complete: ["15-04-2020", "17-05-2020", "19-05-2020", "20-05-2020"],
          strike: ["20-5-2020-5"],
        },
        {
          habitId: 3,
          name: "sleep",
          complete: ["15-04-2020", "17-05-2020", "19-05-2020", "20-05-2020"],
          strike: ["20-5-2020-2"],
        },
      ],
      completed: [],
      newArray: [],
      checked: "false",
    };
  }

  render() {
    return (
      <div>
        {this.state.toComplete.map((item) => (
          <HabitForm
            name={item.name}
            id={item.habitID}
            complete={item.complete}
            strike={item.strike}
          />
        ))}
      </div>
    );
  }
}

export default ListHabit;
