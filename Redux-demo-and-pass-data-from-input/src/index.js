import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/counter';
import './index.css';

const initialState = {
  counter: 0,
  input: []
}

/////Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter += 1
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter -= 1
      }
    }
    case "ACTION": {
      return {
        ...state,
        input: state.input.concat(action.payload)
      }
    }
    default: return state;
  }
}

let store = createStore(reducer);//// Create Store

// store.subscribe(() => {
//   console.log(store.getState())
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));