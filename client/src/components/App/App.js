import React from 'react';
import './App.css';
import Word from '../Word';
import fetchWord from '../../services/FetchWord';
import { BookLoader } from '../BookLoader';

//center element
const divBookStyle = {
  display: 'flex',
  justifyContent: 'center',
  color: 'blue',
};

function App() {
  //const wordsData = fetchWord();
  const wordsData = {
    furigana: 'いちなん',
    word: '一男',
    jlptLevel: null,
    typeOfWord: 'Noun',
    meanings: [
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
      'boy; eldest son',
    ],
    link: 'https://jisho.org/word/%E4%B8%80%E7%94%B7',
  };
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
