import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { observe } from './Game';

const root = document.getElementById('root')

observe((knightPosition) =>
  ReactDOM.render(<Board knightPos={knightPosition} />, root)
)

