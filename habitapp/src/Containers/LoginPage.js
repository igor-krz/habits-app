import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      data: [],
      toDashboard: false,
    };
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = (e) => {
    const data = {
      username: this.state.username,
      password_digest: this.state.password,
    };

    fetch("api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data.message, toDashboard: true });
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    e.preventDefault();
    // this.props.loadFunction(this.state);
  };

  render() {
    if (this.state.toDashboard === true) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { data: this.state.data },
          }}
        />
      );
    }
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-3" id="asideArea"></div>
          <div className="col-lg-6">
            <div className="App-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleUsername}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                    autoComplete="on"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <button type="button" className="btn btn-outline-dark">
                  <Link to="/register">Sign Up</Link>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-3" id="asideArea"></div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
