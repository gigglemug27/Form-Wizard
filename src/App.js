import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './Canvas';
import DraggableButton from './DraggableButton';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ marginRight: '20px' }}>
          {/* Draggable buttons on the left */}
          <DraggableButton type="Navbar" component={<Navbar />} />
          <DraggableButton type="Header" component={<Header />} />
          <DraggableButton type="Card" component={<Card />} />
          <DraggableButton type="Button" component={<Button />} />
          {/* Add more draggable buttons as needed */}
        </div>
        <Canvas />
      </div>
    </DndProvider>
  );
};

export default App;
