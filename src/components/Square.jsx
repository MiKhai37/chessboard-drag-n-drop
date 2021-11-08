import React from 'react';

const Square = ({ black, children }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  return (
    <div 
      style={{ 
        backgroundColor: fill,
        color: stroke,
        width: '60px',
        height: '60px',
        border: '1px solid black'
      }}
    >
      {children}
    </div>
  );
};

export default Square;
