import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-3" id="asideArea"></div>
          <div className="col-lg-6">
            <div className="App-body">
              <form>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <button type="submit" className="btn btn-primary">
                  Sign UP
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

export default HomePage;
