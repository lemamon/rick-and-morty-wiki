import React from "react";
import data from "./data";
import Detail from "./screens/Detail";
import Home from "./screens/Home";

export default function App() {
  // return <Home />;
  return <Detail card={data[0]} />;
}
