import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import NewFile from "./components";
import store from "./Store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NewFile />
      </Provider>
    );
  }
}

export default App;
