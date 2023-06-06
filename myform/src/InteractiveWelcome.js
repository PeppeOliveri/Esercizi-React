import React from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };

  handleInput = (event) => {
    const value = event.target.value;

    this.setState((state) => {
      return {
        username: value,
      };
    });
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInput}
        ></input>
        <Welcome name={this.state.username} />
      </div>
    );
  }
}
