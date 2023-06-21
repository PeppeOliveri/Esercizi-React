import React from "react";
import CarDetails from "./CarDetails";
// import GithubUser from "./GithubUser";
// import ClickCounter from "./ClickCounter";
// import { HookCounter } from "./HookCounter";

function App() {
  return (
    <div>
      {/* <ClickCounter /> */}
      {/* <HookCounter /> */}
      {/* <GithubUser username="PeppeOliveri" /> */}
      <CarDetails
        initialData={{ model: "ferrari", year: 1992, color: "red" }}
      />
    </div>
  );
}

export default App;
