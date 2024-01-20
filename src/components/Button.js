import React from 'react';
import { useDrag } from 'react-dnd';

const Button = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BUTTON',
    item: { type: 'Button' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        width: '120px',
        height: '40px',
        background: '#f44336',
        color: '#fff',
        textAlign: 'center',
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
        // Additional styling for Button
        borderRadius: '3px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        marginRight: '10px',
      }}
    >
      Button
    </div>
  );
};

export default Button;
