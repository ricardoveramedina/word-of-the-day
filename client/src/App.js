import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Word } from './components/Word';

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
        <Word />
      </header>
    </div>
  );
}

export default App;
