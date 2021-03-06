import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import alert from "alert";
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
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ data: data.userInfo, toDashboard: true });
      })
      .catch((error) => {
        console.log("error: " + error);
        console.log("user not found");
        window.alert("wrong username and password");
        this.setState({ requestFailed: true });
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
            <div className="App-body" id="formArea">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
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
                <div className="form-group row">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                    autoComplete="on"
                  />
                </div>
                <button type="submit" className="loginButton">
                  Login
                </button>
                <Link to="/register">
                  <button type="button" className="loginButton">
                    Sign up
                  </button>
                </Link>
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
