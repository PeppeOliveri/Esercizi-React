import React from "react";

export default class Age extends React.Component {
  render() {
    return (
      <div>{this.props.age > 18 && <p>your age is {this.props.age}</p>}</div>
    );
  }
}
