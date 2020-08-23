import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
   
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </div>
    );
  }
}

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats Page</h1>

    </div>
  );
};



export default App;
