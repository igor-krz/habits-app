import React, { Component } from 'react'

// 1. if not first of month and if it's not january --> get difference
// 2. if first of month but not january,. get previous days of month === previous day
//3. if january previous day of previous month of previous year === previous day
// yy6y

 class HabitForm extends Component {

    constructor(props) {
        super(props);
        this.state = {

       isChecked:'false'
        };
      }


    postComplete  = (e,habitID) => {
        const date = new Date()
        let day = date.getDate()
        let month = date.getMonth()+1
        let year = date.getFullYear()
        let completed = day + '-' + month + '-' + year
        console.log(completed)

        const data = {
            habitID:habitID,
            complete:completed
          };
      
          fetch("api/signup", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).catch((error) => {
            console.log("Error:", error);
          });
      
          e.preventDefault();

    }
  
    
      handleChange = (event) => {
          let name =event.target.name
        this.setState({
            isChecked: !this.state.isChecked
        },() => this.handleSubmit(name)

        )

      }

  handleSubmit = (name) => {
       if(this.state.isChecked ===true) {
           console.log(name)
       }
  }


    render() {
       
        return (
            <div>
              
                <label for={this.props.name}>{this.props.name}</label><br></br>
                <input type="checkbox" id={this.props.habitID}  name={this.props.name} value={this.props.name} checked={this.state.isChecked} onChange={this.handleChange}/>
                  
            </div>
        )
    }
}

<<<<<<< HEAD
export default HabitForm
=======
export default HabitForm
>>>>>>> d7955d5e0b8aa51edddffa97d07e2a9d4e69e339
