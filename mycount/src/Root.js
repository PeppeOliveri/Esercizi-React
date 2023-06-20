import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
