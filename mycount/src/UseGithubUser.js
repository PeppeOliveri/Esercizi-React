import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function UseGithubUser({ username }) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function refresh() {
    mutate();
  }

  return {
    users: data,
    error,
    refresh: refresh,
  };
}
