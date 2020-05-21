import React, { Component } from 'react'
import Streak from './Streak';

class Habit extends Component {
    constructor(props) {
        super(props);
        this.state = {

       isChecked:'false',
       complete: false
        }
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

handleDelete = (event) => {
    const habitID = this.props.id

    fetch('habitapi/deletehabit', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'habit_id': habitID
        })
    })
    .then((response) => {
            response.json();
            console.log(response);
        }
        )
    .then(this.refreshPage);
}

refreshPage = () => {
    window.location.reload(false);
  };

render () {
    return (
        <div>
            <label for={this.props.name}>{this.props.name}</label><br></br>
            <input type="button" key={this.props.id}  name={this.props.name} value={this.props.name} onClick={this.handleSubmit}/>
            <Streak  complete={this.props.complete} current_streak={this.props.current_streak}  highest_streak={this.props.highest_streak}  date={this.props.date}/>
            <button onClick={this.handleDelete.bind(this, this.props.id)}> Delete </button>
        </div>
        )
    }
}

export default Habit
