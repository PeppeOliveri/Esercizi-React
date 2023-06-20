import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  return (
    <div>
      <Outlet />
      <Link to={"/user"}>Go to ShowGit</Link>
    </div>
  );
}
