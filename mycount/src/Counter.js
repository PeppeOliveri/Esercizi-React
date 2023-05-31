import React from "react";

export default class Counter extends React.Component {
  state = {
    count: this.props.count,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, this.props.interval);
  }

  static defaultProps = {
    count: 5,
    increment: 2,
    interval: 5000,
  };

  render() {
    return <h1>Count: {this.state.count} </h1>;
  }
}
