import React, { Component } from "react";
import Streak from "./Streak";

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

  // postComplete  = (e,habitID) => {
  //
  //     let completed = day + '-' + month + '-' + year
  //     console.log(completed)

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

      
handleSubmit = (event) => {
     const  name= event.target.name
    console.log(name)
       
  }


  render() {
    return (

        <div>
            {/* <h1>{this.props.name}</h1> */}
            <label for={this.props.name}>{this.props.name}</label><br></br>
            <input type="button" key={this.props.id}  name={this.props.name} value={this.props.name} onClick={this.handleSubmit}/>
            <Streak  complete={this.props.complete} current_streak={this.props.current_streak}  highest_streak={this.props.highest_streak}  date={this.props.date}/>
            </div>
        )
    }

}

export default Habit;
