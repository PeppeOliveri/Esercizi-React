import { useState } from "react";

export function HookLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;

    setData((data) => {
      return { ...data, [name]: value };
    });
  }
  function onLogin() {
    console.log(data);
  }

  function subForm(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={subForm}>
        <input
          name="username"
          type="text"
          onChange={handleInput}
          value={data.username}
        ></input>
        <input
          name="password"
          type={"password"}
          onChange={handleInput}
          value={data.password}
        ></input>
        <button onClick={onLogin} disabled={!data.username || !data.password}>
          Login
        </button>
      </form>
    </div>
  );
}
