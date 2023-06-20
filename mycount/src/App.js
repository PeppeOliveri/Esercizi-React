import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { UseGithubUser } from "./UseGithubUser";
import ShowGithub from "./ShowGithub";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowGithub />} />
        <Route path="/users:username" element={<ShowGithub />} />
        <Route path="/:username" element={<UseGithubUser />} />
      </Routes>
    </>
  );
}

export default App;
