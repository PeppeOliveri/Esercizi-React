import { useState, useEffect } from "react";

export function UseGithubUser({ username }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(null);

    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const json = await res.json();
        setData(json);
      } catch {
        setError();
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [username]);

  return { data, loading, error };
}
