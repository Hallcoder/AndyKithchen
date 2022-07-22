import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {bugAdded} from './actionsCreator'
import './index.css'
import store from './store';
import * as actions from "./actionTypes";
const unsubscribe = store.subscribe(()=>{
  console.log('Store changed',store.getState());
})
store.dispatch(bugAdded('Bug added broo'));
store.dispatch({
  type:actions.BUG_RESOLVED,
  payload:{
    id:1
  }
})
// store.dispatch({
//   type:actions.BUG_REMOVED,
//   payload:{
//     id:1,
//   }
// })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {console.log(store.getState())}
    <App />
  </React.StrictMode>
)
