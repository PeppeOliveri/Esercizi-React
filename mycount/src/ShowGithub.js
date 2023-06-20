import { Link, Outlet } from "react-router-dom";

export default function ShowGithub() {
  return (
    <div>
      <Outlet />
      <Link to=":username">User</Link>
    </div>
  );
}
