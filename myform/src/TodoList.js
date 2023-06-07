import React from "react";

export default class TodoList extends React.Component {
  state = {
    items: ["pen", "gum", "phone"],
    value: "",
  };

  addItem = () => {
    this.setState((state) => {
      return { items: [...this.state.items, this.state.value] };
    });
  };
  handleInput = (event) => {
    this.setState((state) => {
      return { value: event.target.value };
    });
  };

  render() {
    const item = this.state.items.map((item) => <li>{item}</li>);
    return (
      <div>
        <input onChange={this.handleInput} type={Text}></input>
        <button onClick={this.addItem}>Add item</button>
        <ul>{item}</ul>
      </div>
    );
  }
}
