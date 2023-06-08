import React from "react";

export default class TodoList extends React.Component {
  state = {
    items: ["pen", "gum", "phone"],
    value: "",
  };

  addItem = () => {
    this.setState((state) => {
      return { items: [...this.state.items, this.state.value], value: "" };
    });
  };
  handleInput = (event) => {
    this.setState((state) => {
      return { value: event.target.value };
    });
  };

  clearArray = () => {
    this.setState((state) => {
      return { items: [] };
    });
  };

  render() {
    const item = this.state.items.map((item) => <li>{item}</li>);
    return (
      <div>
        <input
          onChange={this.handleInput}
          type={Text}
          value={this.state.value}
        ></input>
        <button onClick={this.addItem}>Add item</button>
        <button onClick={this.clearArray}>Clear items</button>
        <ul>{item}</ul>
      </div>
    );
  }
}
