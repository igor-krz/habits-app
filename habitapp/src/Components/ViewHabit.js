import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
  render() {
    return (
      <div>
        {this.state.habitData ===[] ? (
          this.state.habitData.map((object) => (
            <div>
              {object.habitName}
              {object.frequency}
              {object.complete}{" "}
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
