import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [data, setData] = useState("");
  const [usernames, setUsernames] = useState([]);

  function handleInput(event) {
    const value = event.target.value;
    setData(value);
  }

  function addUser() {
    setUsernames([...usernames, data]);
  }

  return (
    <div>
      <input value={data} type="text" name="username" onChange={handleInput} />
      <button onClick={addUser}>Search User</button>
      <ul>
        {usernames.map((user) => (
          <li>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
