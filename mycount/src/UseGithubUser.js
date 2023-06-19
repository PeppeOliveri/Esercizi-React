import { useState, useEffect } from "react";

export function UseGithubUser({ username }) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const json = await res.json();
      setData(json);
    }
    fetchUser();
  }, [username]);

  return data;
}
