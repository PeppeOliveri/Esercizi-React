import React from "react";

export default class ClickTracker extends React.Component {
  state = {
    click: "",
  };

  tracker = (event) => {
    this.setState((state) => {
      console.log(event);
      return { click: event.target.name };
    });
  };

  render() {
    return (
      <div>
        <button name="1" onClick={this.tracker}>
          Button1
        </button>
        <button name="2" onClick={this.tracker}>
          Button2
        </button>
        <button name="3" onClick={this.tracker}>
          Button3
        </button>
        <h1>{this.state.click}</h1>
      </div>
    );
  }
}
