import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      username: "",
      password: "",
    };
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleSurname = (e) => {
    this.setState({ surname: e.target.value });
  };
  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    console.log(this.state.name);
    console.log(this.state.surname);
    console.log(this.state.username);
    console.log(this.state.password);

    const data = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
    };

    fetch("api/habits", {
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
  render() {
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-2" id="asideArea"></div>
          <div className="col-lg-8">
            <div className="App-body">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                Add habit
              </button>

              <div
                className="modal fade"
                id="exampleModalLong"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
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
                      <form className="form-horizontal">
                        <div className="form-group">
                          <label
                            className="control-label col-sm-2"
                            htmlFor="email"
                          >
                            Email:
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter email"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-sm-2"
                            htmlFor="pwd"
                          >
                            Password:
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control"
                              id="pwd"
                              placeholder="Enter password"
                              name="pwd"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" name="remember" />{" "}
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2" id="asideArea"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
