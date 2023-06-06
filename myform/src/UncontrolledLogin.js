import React from "react";

export default class UncontrolledLogin extends React.Component {
  handleForm = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    console.log(username, password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <input name="username" type={Text}></input>
          <input name="password" type={"password"}></input>
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
