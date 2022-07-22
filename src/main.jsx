import React from 'react'
import ReactDOM from 'react-dom/client'
import * as actions from './actionTypes'
import App from './App'
import './index.css'
import store from './store';
const unsubscribe = store.subscribe(()=>{
  console.log('Store changed',store.getState());
})
store.dispatch({
  type:actions.BUG_ADDED,
  payload:{
    description:'bug1'
  }
});

unsubscribe()
store.dispatch({
  type:actions.BUG_REMOVED,
  payload:{
    id:1,
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {console.log(store.getState())}
    <App />
  </React.StrictMode>
)
