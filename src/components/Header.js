import React from 'react';
import { useDrag } from 'react-dnd';

const Header = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BUTTON',
    item: { type: 'Header' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        width: '100%',
        height: '80px',
        background: '#3498db', // Professional blue color
        color: '#fff',
        textAlign: 'center',
        cursor: 'move',
        opacity: isDragging ? 0.8 : 1,
        borderRadius: '0 0 10px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5em',
        fontWeight: 'bold',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Subtle box shadow
        marginBottom: '10px',
      }}
    >
      <div>Your Company Name</div>
    </div>
  );
};

export default Header;
