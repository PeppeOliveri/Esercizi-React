import React from "react";

export default class ClickCounter extends React.Component {
  state = {
    count: this.props.count,
  };

  static defaultProps = {
    count: 0,
    increment: 1,
  };
  handleClick = () => {
    this.setState((state) => {
      return {
        count: state.count + this.props.increment,
      };
    });
  };

  render() {
    return (
      <div>
        <>
          <h1>Count : {this.state.count}</h1>
          <button onClick={this.handleClick}>Increment</button>
        </>
      </div>
    );
  }
}
