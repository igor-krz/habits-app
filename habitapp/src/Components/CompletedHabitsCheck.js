import React, { Component } from "react";
import ViewHabit from "./ViewHabit";
import { Redirect } from "react-router-dom";

class CompletedHabitsCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
          habitData: []
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


      handleChange = (e) => {
        this.setState({
            [e.target.complete]: e.target.value
        })
      }

      handleSubmit = (e) => {

          const data = {
              complete: this.state.complete
          }
          fetch(`/habitapi/${this.props.user}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
          })
          .then((response) => response.json())
          .then( )
          this.setState( {complete: this.state.complete, toDashboard: true})
          .catch((error) => {
              console.log("Error:", error);
          });
          e.preventDefault();
    };
    
      

  render() {
      if(this.state.toDashboard === true) {
          return <Redirect to="/dashboard" />;
      } else{
    return (<div>
        <form onSubmit={this.handleSubmit}>
        {this.state.habitData ? (
            this.state.habitData.map((object) => (
                <div>

                        <label htmlFor="habitComplete">{object.habitName}</label>
                        <input
                        type="checkbox"
                        id="habitComplete"
                        name="habitComplete"
                        value={object.habitName + "complete"}
                        onChange={this.handleChange}
                        >
                        </input>
                        {/* <label htmlFor="habitNotComplete">{object.habitName}</label>
                        <input
                        type="checkbox"
                        id="habitNotComplete"
                        name="habitNotComplete"
                        value={object.habitName + "not complete"}
                        onChange={this.handleChange}
                        >
                        </input>
                         */}
                </div>
              
           
              ))
        ) : (
            <h1>No habits to complete</h1>
        )
    }
      <button type="submit">Submit</button>
               {/* onsubmit sends complete to database */}
           </form>
    </div>
    );
    
  }
}

}

export default CompletedHabitsCheck;