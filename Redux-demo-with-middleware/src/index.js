import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Counter from './components/counter';

import './index.css';

const initialState = {
  counter: 0,
  input: []
}

export function counter123(state = initialState, action) {
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
    case "INPUTDATA": {
      return {
        ...state,
        input: state.input.concat(action.payload)
      }
    }

    default: return state;
  }
}

const middleware = applyMiddleware(thunk);
// let store = createStore(counter);
const store = createStore(
  counter123,
  middleware
);



const Actiontype = {
  INPUTDATA: "INPUTDATA"
}

export function Data(data) {
  return dispatch => {
    dispatch({ type: Actiontype.INPUTDATA, payload: data })
  }
}


ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>
  , document.getElementById('root'));