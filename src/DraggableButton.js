import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableButton = ({ type, component }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BUTTON',
    item: { type, component },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        padding: '12px',
        margin: '10px',
        border: '2px solid #ccc', // Neutral border color
        borderRadius: '8px',
        cursor: 'move',
        opacity: isDragging ? 0.8 : 1,
        background: '#aacef7', // Neutral background color
        color: '#333', // Dark text color
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle box shadow
        transition: 'background 0.3s ease, color 0.3s ease', // Smooth color transition
        marginTop: '70px', 
        height: '40px',
        width: '100px',
        justifyContent: 'center',
      }}
    >
      {type}
    </div>
  );
};

export default DraggableButton;
