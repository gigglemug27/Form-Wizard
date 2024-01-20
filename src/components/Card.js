import React from 'react';
import { useDrag } from 'react-dnd';

const Card = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BUTTON',
    item: { type: 'Card' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        width: '200px',
        height: '300px',
        background: '#fff',
        color: '#333',
        textAlign: 'left',
        cursor: 'move',
        opacity: isDragging ? 0.8 : 1,
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Professional Card</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non odio ac purus euismod
        ullamcorper. Sed sodales aliquet diam, at facilisis odio semper eu.
      </div>
      <div style={{ marginTop: '10px', fontSize: '0.8em', color: '#777' }}>Author: John Doe</div>
    </div>
  );
};

export default Card;
