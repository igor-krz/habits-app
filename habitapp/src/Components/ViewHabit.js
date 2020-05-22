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
  handleShowhabit = (e) => {
    e.preventDefault();
    this.setState({ displayHabit: "habitDisplay" });
  };
  render() {
    return (
      <div>
        {this.state.habitData.description !== "drinks" ? (
          this.state.habitData.map((object) => (
            <div key={object}>
              {object.habitName}
              {object.description}
              <br />
              <Streak
                date={this.props.date}
                complete={object.complete}
                current_streak={object.current_streak}
                highest_streak={object.highest_streak}
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
