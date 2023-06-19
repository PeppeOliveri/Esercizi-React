import React from "react";
import { useLogin } from "./UseLogin";

function Login() {
  const { username, password, inputUsername, inputPassword, saveData } =
    useLogin();

  return (
    <div>
      <form>
        <input onChange={inputUsername} type="text" value={username} />
        <input onChange={inputPassword} type="password" value={password} />
        <button onClick={saveData}>Login</button>
      </form>
    </div>
  );
}

export default Login;
