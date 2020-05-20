import React, { Component } from 'react'
import Habit from './Habit'

 class HabitCheckForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          habits: "",
          
        };
      }
     componentDidMount () {
         fetch(`/habitapi/${this.props.user}`)
         .then(response => response.json())
         .then(result => this.setState({
                habits:result
         },() => console.log(this.state.habits)
         ))
     }



    render() {
        return (
            <div>
                {this.state.habits ? this.state.habits.map(object => <Habit  id={object.habit_id} complete={object.complete}  name={object.habitName} />): <h1>No Habits to complete</h1>}
              
            </div>
        )
    }
}

export default HabitCheckForm
