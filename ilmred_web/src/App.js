import './App.css';

import React from 'react';
// import logo from './logo.svg';
import logo from './ilmred_logo.JPG';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-ilmredlogo" alt="logo" />
        <p>
          Welcome to ILM.RED
        </p>
      </header>
    </div>
  );
}

export default App;
