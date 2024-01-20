import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableButton from './DraggableButton';
import Navbar from './components/Navbar';

const Canvas = () => {
  const [droppedComponents, setDroppedComponents] = useState([]);

  const handleDrop = (item) => {
    setDroppedComponents([...droppedComponents, item]);
  };

  const [, drop] = useDrop({
    accept: 'BUTTON',
    drop: (item) => handleDrop(item),
  });

  const renderDroppedComponent = (item, index) => {
    const { type, component } = item;

    if (type === 'Navbar') {
      return (
        <div key={index} style={{ margin: '10px', padding: '10px' }}>
          <Navbar />
        </div>
      );
    }

    return (
      <div
        key={index}
        style={{
          border: '1px solid #ccc',
          margin: '10px',
          padding: '10px',
          borderRadius: '8px',
          background: '#fff',
          display: 'inline-block',
        }}
      >
        {component}
      </div>
    );
  };

  return (
    <div
      ref={drop}
      style={{
        border: '2px dashed #ccc',
        padding: '20px',
        flex: '1',
        minHeight: '300px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h2>Drag your components here...</h2>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '85%',
          height: '75%',
          border: '1px solid #000',
          borderRadius: '10px',
          background: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* Render dropped components */}
        {droppedComponents.map((item, index) => renderDroppedComponent(item, index))}
      </div>
    </div>
  );
};

export default Canvas;
