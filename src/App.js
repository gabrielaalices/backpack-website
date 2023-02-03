import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import MainPage from "./components/main.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
        <div>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
          </Routes>
        </div>
    );
  }
}

export default App;