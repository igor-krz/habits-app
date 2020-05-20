import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
export class NewHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitName: "",
      habitDes: "",
      frequency: "",
      complete: false,
    };
  }

  handleHabitname = (e) => {
    this.setState({ habitName: e.target.value });
  };
  handleHabitdes = (e) => {
    this.setState({ habitDes: e.target.value });
  };
  handleHabitfrequency = (e) => {
    this.setState({ frequency: e.target.value });
  };

  //   componentWillMount(e) {
  //     this.handleSubmit(e);
  //   }
  handleSubmit = (e) => {
    const data = {
      habitName: this.state.habitName,
      complete: this.state.habitDes,
      frequency: this.state.frequency,
      userId: this.props.user,
    };
    fetch("/habitapi/newhabit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.log("Error:", error);
    });

    e.preventDefault();
    // this.props.loadFunction(this.state);
  };
  refreshPage = () => {
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Add habit
        </button>
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add Habit
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group row">
                    <label
                      htmlFor="habitName"
                      className="col-sm-2 col-form-label"
                    >
                      Habit Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="habitName"
                        value={this.state.habitName}
                        onChange={this.handleHabitname}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="habitDes"
                      className="col-sm-2 col-form-label"
                    >
                      Description
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="habitDes"
                        value={this.state.habitDes}
                        onChange={this.handleHabitdes}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="frequency"
                      className="col-sm-2 col-form-label"
                    >
                      Frequency
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="frequency"
                        value={this.state.frequency}
                        onChange={this.handleHabitfrequency}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-10">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.refreshPage}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewHabit;
