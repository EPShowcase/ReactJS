import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";

import CounterComponent from "./components/counter";
import Navigation from "./components/navigation";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <br />
          <CounterComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
