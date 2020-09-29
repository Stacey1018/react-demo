import React from 'react';
import './App.css';
import Home from './pages/home/home'
import {Router } from 'react-router'
function App() {

  return (
    <div className="App">
      <div className="content">
        <Router path="/"></Router>
      </div>
      <div className="footer">
        <Home />
      </div>
    </div>
  );
}

export default App;
