import React from "react";
import FilteredList from "./FilteredList";
// import ClickCounter from "./ClickCounter";
// import { HookCounter } from "./HookCounter";

const list = [
  {
    name: "Luca",
    age: 17,
    id: 101,
  },
  {
    name: "Pollo",
    age: 22,
    id: 102,
  },
  {
    name: "Cenzo",
    age: 54,
    id: 103,
  },
];

function App() {
  return (
    <div>
      {/* <ClickCounter /> */}
      {/* <HookCounter /> */}
      <FilteredList list={list} />
    </div>
  );
}

export default App;
