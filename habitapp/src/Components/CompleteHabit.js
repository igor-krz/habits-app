import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
class CompleteHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitData: [],
    };
  }
  handleComplete = (i) => {
    this.setState((state, props) => {
      state.habitData[i].complete = true;
      return {
        habitData: state.habitData,
      };
    });
    const data = {
      complete: this.state.habitData[i].complete,
      habitName: this.state.habitData[i].habitName,
    };
    console.log(data);
  };

  componentDidMount() {
    fetch(`/habitapi/${this.props.user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ habitData: data });
      });
  }
  handleSubmit = (e) => {
    const data = {
      complete: this.state.habitData.complete,
      habitName: this.state.habitData.habitName,
    };
    console.log(data);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          {this.state.habitData ? (
            this.state.habitData.map((x, i) => (
              <div className="answerArea" key={x}>
                <label htmlFor={x.habitName}>{x.habitName}</label>
                <input
                  name={x.habitName}
                  key={x}
                  value="ok"
                  type="checkbox"
                  onChange={(e) => this.handleComplete(i)}
                />
                <input
                  type="submit"
                  value="submit"
                  onSubmit={this.handleSubmit}
                />
              </div>
            ))
          ) : (
            <h1>Data logged in </h1>
          )}
        </form>
      </div>
    );
  }
}

export default CompleteHabit;
