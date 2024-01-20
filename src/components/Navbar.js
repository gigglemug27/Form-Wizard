import React from 'react';
import { useDrag } from 'react-dnd';

const Navbar = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BUTTON',
    item: { type: 'Navbar' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        width: '95%',
        height: '50px',
        background: '#24292e', // Dark background color
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px', // Add padding for content
        cursor: 'move',
        opacity: isDragging ? 0.8 : 1,
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Subtle box shadow
        position: 'relative',
      }}
    >
      <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>My Navbar</div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
