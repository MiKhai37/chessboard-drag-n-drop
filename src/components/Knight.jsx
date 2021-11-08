import React from 'react';
import { ItemTypes } from '../Constants';
import { useDrag } from 'react-dnd';

const Knight = () => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))


  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
    <span style={{fontSize: 64}}>
      ♘
    </span>
    </div>
  );
};

export default Knight;
