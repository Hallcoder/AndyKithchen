import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { compose, pipe } from "lodash/fp";
import "./App.css";
function App() {
  let input = " JavaScript ";
  let output = "div" + input.trim() + "<div>";

  const trim = (str) => str.trim();
  const wrap = type => str => `<${type}>${str}</${type}>`
  const toLowerCase = str => str.toLowerCase();
  const transform =pipe(trim,toLowerCase,wrap('zesta'));
  const result = transform(input);

  console.log(result);
}
export default App;
