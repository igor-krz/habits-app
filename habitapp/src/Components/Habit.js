<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component } from 'react'
import Streak from './Streak';
>>>>>>> d7955d5e0b8aa51edddffa97d07e2a9d4e69e339

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

<<<<<<< HEAD
  //     const data = {
  //         habitID:habitID,
  //         complete:completed
  //       };
=======
    // postComplete  = (e,habitID) => {
    //   
    //     let completed = day + '-' + month + '-' + year
    //     console.log(completed)
>>>>>>> d7955d5e0b8aa51edddffa97d07e2a9d4e69e339

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
<<<<<<< HEAD
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
=======
        <div>
            {/* <h1>{this.props.name}</h1> */}
            <label for={this.props.name}>{this.props.name}</label><br></br>
            <input type="checkbox" key={this.props.id}  name={this.props.name} value={this.props.name} checked={this.state.isChecked} onChange={this.handleChange}/>
            <Streak  complete={this.props.complete} current_streak={this.props.current_streak}  highest_streak={this.props.highest_streak}  date={this.props.date}/>
            </div>
        )
    }
>>>>>>> d7955d5e0b8aa51edddffa97d07e2a9d4e69e339
}

export default Habit;
