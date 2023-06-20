import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function UseGithubUser() {
  const [data, setData] = useState();
  const { data: username = "PeppeOliveri" } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const json = await res.json();
      setData(json);
    }
    fetchUser();
  }, [username]);

  return { data };
}
