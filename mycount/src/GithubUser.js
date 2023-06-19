import React from "react";
import { UseGithubUser } from "./UseGithubUser";

export default function GithubUser({ username }) {
  const { data, loading, error } = UseGithubUser({ username });

  return (
    <div>
      <p>Nome: {data && data.name}</p>
      <p>Link: {data && data.url}</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
    </div>
  );
}
