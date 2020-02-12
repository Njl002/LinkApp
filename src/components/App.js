import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./routing/Main";
import NavBar from './nav_bar/NavBar';

function App() {
  return (
    <div className="App">
      <Main />
      <NavBar />
    </div>
  );
}

export default App;