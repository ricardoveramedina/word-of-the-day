import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BookLoader } from './components/BookLoader';

//center element
const divBookStyle = {
  display: 'flex',
  justifyContent: 'center',
  color: 'blue',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookLoader />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
