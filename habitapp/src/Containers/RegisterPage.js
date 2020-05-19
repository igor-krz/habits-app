import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class RegisterPage extends Component {
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
      password_digest: this.state.password
    }

    fetch('api/signup', {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .catch((error) => {
      console.log('Error:', error)
    });
  
    e.preventDefault();
    // this.props.loadFunction(this.state);
  };

  render() {
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-3" id="asideArea"></div>
          <div className="col-lg-6">
            <div className="App-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={this.state.name}
                      onChange={this.handleName}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="surname">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="surname"
                      value={this.state.surname}
                      onChange={this.handleSurname}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
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
                    value={this.state.password}
                    onChange={this.handlePassword}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign up
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

export default RegisterPage;
