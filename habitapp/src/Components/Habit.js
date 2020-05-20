import React, { Component } from "react";

class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: "false",
    };
  }

  // postComplete  = (e,habitID) => {
  //     const date = new Date()
  //     let day = date.getDate()
  //     let month = date.getMonth()+1
  //     let year = date.getFullYear()
  //     let completed = day + '-' + month + '-' + year
  //     console.log(completed)

  //     const data = {
  //         habitID:habitID,
  //         complete:completed
  //       };

  //       fetch("api/signup", {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }).catch((error) => {
  //         console.log("Error:", error);
  //       });

  //       e.preventDefault();

  // }

  handleChange = (event) => {
    let name = event.target.name;
    this.setState(
      {
        isChecked: !this.state.isChecked,
      },
      () => this.handleSubmit(name)
    );
  };

  handleSubmit = (name) => {
    if (this.state.isChecked === true) {
      console.log(name);
    }
  };

  render() {
    return (
      <div>
        {/* <h1>{this.props.name}</h1> */}
        <label for={this.props.name}>{this.props.name}</label>
        <br></br>
        <input
          type="checkbox"
          key={this.props.id}
          name={this.props.name}
          value={this.props.name}
          checked={this.state.isChecked}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Habit;
