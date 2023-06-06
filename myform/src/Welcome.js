import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
      </div>
    );
  }
}
