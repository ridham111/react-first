// src/Tooltip.js
import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ position, text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className={`tooltip ${position} ${isTooltipVisible ? 'visible' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
