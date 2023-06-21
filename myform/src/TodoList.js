import React from "react";

export default class TodoList extends React.Component {
  state = {
    items: ["pen", "milk", "phone"],
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
  removeItem = (index) => {
    const remove = this.state.items.filter((element, i) => {
      return i !== index;
    });
    this.setState({ items: remove });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleInput} value={this.state.value}></input>
        <button onClick={this.addItem}>Add item</button>
        <button onClick={this.clearArray}>Clear items</button>
        {this.props.render(this.state.items, this.removeItem)}
      </div>
    );
  }
}
