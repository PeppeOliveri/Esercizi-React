import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import GithubUser from "./GithubUser";
import ShowGithub from "./ShowGithub";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowGithub />} />
        <Route path="/:users:username" element={<ShowGithub />} />
        <Route path="/:username" element={<GithubUser />} />
      </Routes>
    </>
  );
}

export default App;
