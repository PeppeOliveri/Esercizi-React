import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Not found</h1>
              <Link to="/"> Go back </Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
