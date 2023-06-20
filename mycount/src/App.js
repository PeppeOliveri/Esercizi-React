import React from "react";
import { HookCounter } from "./HookCounter";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<HookCounter />} />
      </Routes>
    </>
  );
}

export default App;
