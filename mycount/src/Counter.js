import React from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends React.Component {
  state = {
    count: this.props.count,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: this.state.count + this.props.increment,
        };
      });
    }, this.props.interval);
  }

  static defaultProps = {
    count: 0,
    increment: 1,
    interval: 1000,
  };

  render() {
    return (
      <div>
        <>
          <CounterDisplay count={this.state.count} />
        </>
      </div>
    );
  }
}
