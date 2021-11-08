import React from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { moveKnight, canMoveKnight } from '../Game';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const renderSquare = (i, knightPos) => {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPos)}
      </BoardSquare>
    </div>
  )
}

const renderPiece = (x, y, [knightX, knightY]) => {
  if (x === knightX && y === knightY) {
    return <Knight/>
  }
}

/* const handleSquareClick = (toX, toY) => {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY)
  }
}; */

const Board = ({ knightPos }) => {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPos))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '480px',
          height: '480px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};

export default Board;