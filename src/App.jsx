import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { compose, pipe } from "lodash/fp";
import { produce } from "immer";
import "./App.css";
function App() {
  let book = { title: "Harry Potter" };
  let updated = publish(book);
  console.log(book);
  console.log(updated);
}
function publish(book) {
 return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}
export default App;
