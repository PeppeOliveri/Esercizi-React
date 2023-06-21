import React from "react";
import { UseGithubUser } from "./UseGithubUser";

export default function GithubUser({ username }) {
  const { users, error, refresh } = UseGithubUser({ username });

  return (
    <div>
      <p>Nome: {users && users.name}</p>
      <p>Link: {users && users.url}</p>
      {error && <h3>An error has occurred</h3>}
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}
