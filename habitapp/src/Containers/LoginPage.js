import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loadFunction(this.state);
  };
  render() {
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
