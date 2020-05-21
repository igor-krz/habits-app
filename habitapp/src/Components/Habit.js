import React, { Component } from 'react'
import Streak from './Streak';

class Habit extends Component {
    constructor(props) {
        super(props);
        this.state = {

       isChecked:'false'
        };
      }


    // postComplete  = (e,habitID) => {
    //   
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
  
    
  

      
handleSubmit = (event) => {
     const  name= event.target.name
    console.log(name)
       
  }

render () {
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

export default Habit
