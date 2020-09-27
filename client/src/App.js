import React from 'react';
import logo from './logo.svg';
import './App.css';
import Word from './components/Word';
import fetchWord from './services/FetchWord';
import { BookLoader } from './components/BookLoader';

//center element
const divBookStyle = {
  display: 'flex',
  justifyContent: 'center',
  color: 'blue',
};

function App() {
  const wordsData = fetchWord();
  //console.log(wordsData);

  //{!wordsData ? <BookLoader /> : <Word words={wordsData} />}
  return (
    <div className="App">
      <header className="App-header">
        {!wordsData ? <BookLoader /> : <Word words={wordsData} />}
      </header>
    </div>
  );
}

//TODO: bull the meanings
//TODO: add dark mode
//TODO: after loading display data smoothtly
//TODO: try again button

export default App;
