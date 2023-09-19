// src/App.js
import React from 'react';
import Tooltip from './Tooltip/Tooltip';

function App() {
  return (
    <div className="App ">
      <div className='tooltip-position'>
      <Tooltip position="top" text="Top Tooltip">
        <button>Top Tooltip</button>
      </Tooltip>
      <Tooltip position="bottom" text="Bottom Tooltip">
        <button>Bottom Tooltip</button>
      </Tooltip>
      <Tooltip position="left" text="Left Tooltip">
        <button>Left Tooltip</button>
      </Tooltip>
      <Tooltip position="right" text="Right Tooltip">
        <button>Right Tooltip</button>
      </Tooltip>
      </div>
      
    </div>
  );
}

export default App;
