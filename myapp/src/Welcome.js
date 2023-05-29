import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome, {this.props.name} <Age age="18" />
        </p>
      </div>
    );
  }
  static defaultProps = {
    name: <strong>Gigi</strong>,
  };
}
