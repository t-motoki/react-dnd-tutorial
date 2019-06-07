import React from 'react';
import './App.css';
import Knight from './Knight'
import Square from './Square'

function App() {
  return (
    <div>
      <Square black>
        <Knight />
      </Square>
    </div>
  );
}

export default App;
