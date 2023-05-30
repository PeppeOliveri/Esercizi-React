import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name === "John" ? (
          <p>Welcome, {this.props.name}</p>
        ) : (
          <p>Invalid username</p>
        )}
        <Age age="3" />
      </div>
    );
  }
  static defaultProps = {
    name: "John",
  };
}
