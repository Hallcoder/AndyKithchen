import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { compose, pipe } from "lodash/fp";
import {Map} from 'immutable';
import {produce} from 'immer';
import "./App.css";
function App() {
let book =  Map({title: "Harry Potter"});
book = publish(book);
console.log(book.toJS());
}
function publish(book){
 return  book.set('isPublished',true)
}
export default App;
