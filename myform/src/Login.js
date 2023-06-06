import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  subForm = (event) => {
    event.preventDefault();
  };

  onLogin = () => {
    console.log(this.state);
  };

  reset = () => {
    this.setState((state) => {
      return {
        username: "",
        password: "",
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.subForm}>
          <input
            name="username"
            type={Text}
            onChange={this.handleInput}
            value={this.state.username}
          ></input>
          <input
            name="password"
            type={"password"}
            onChange={this.handleInput}
            value={this.state.password}
          ></input>
          <button
            onClick={this.onLogin}
            disabled={!this.state.username || !this.state.password}
          >
            Login
          </button>
          <button onClick={this.reset}>Reset Form</button>
        </form>
      </div>
    );
  }
}
