// src/App.js
import React from 'react';
import Tooltip from './Tooltip/Tooltip';

function App() {
  return (
    <div className="App ">
      <Tooltip position="top" text="Top Tooltip">
        <button>Hover Me</button>
      </Tooltip>
      <Tooltip position="bottom" text="Bottom Tooltip">
        <button>Hover Me</button>
      </Tooltip>
      <Tooltip position="left" text="Left Tooltip">
        <button>Hover Me</button>
      </Tooltip>
      <Tooltip position="right" text="Right Tooltip">
        <button>Hover Me</button>
      </Tooltip>
    </div>
  );
}

export default App;
