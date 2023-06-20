import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import GithubUser from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import ShowGithub from "./ShowGithub";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GithubUserList />} />
        <Route path="/user" element={<ShowGithub />}>
          <Route index element={<h3>Show user data</h3>} />
          <Route path=":username" element={<GithubUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
