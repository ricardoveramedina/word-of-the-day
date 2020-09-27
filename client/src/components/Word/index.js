import React, { Fragment } from 'react';
import fetchWord from './fetchWord';
import { BookLoader } from '../BookLoader';

const Word = () => {
  const words = fetchWord();
  return <Fragment>{words ? words : <BookLoader />}</Fragment>;
};

//TODO: UI of word
//TODO: after loading display data smoothtly
//TODO: try again button

export { Word };
