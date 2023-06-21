import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function UseGithubUser({ username }) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    users: data,
    error,
  };
}
