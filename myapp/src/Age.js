import React from "react";

export default class Age extends React.Component {
  render() {
    return (
      <div>
        <p>your age is {this.props.age}</p>
      </div>
    );
  }
}
