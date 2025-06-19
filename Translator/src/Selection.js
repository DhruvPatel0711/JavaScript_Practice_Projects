import React, { useState } from "react";
import './selection.css';

const Selection = ({selectedValue, onSelect}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [svgRotation, setSvgRotation] = useState('0deg');
  const [color, setColor] = useState('#000000');

  const handleHover = () => {
    setColor('#ffffff');
  };

  const handleLeave = () => {
    setColor('#000000');
  };

  const handleClick = () => {
    setDropdownVisible(!isDropdownVisible);
    setSvgRotation(isDropdownVisible ? '0deg' : '180deg');
  };

  const handleSelect = (e) => {
    onSelect(e.target.textContent);  
    setDropdownVisible(false);  
    setSvgRotation('0deg');  
  };

  return (
    <div className="selection">
      <button
        className="btn"
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        {selectedValue}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: `rotate(${svgRotation})`,
            transition: 'transform 0.3s ease',
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={`items ${isDropdownVisible ? 'active' : ''}`}>
        <div className="item" onClick={handleSelect}>English</div>
        <div className="item" onClick={handleSelect}>Spanish</div>
        <div className="item" onClick={handleSelect}>French</div>
        <div className="item" onClick={handleSelect}>Hindi</div>
        <div className="item" onClick={handleSelect}>Gujarati</div>
      </div>
    </div>
  );
};

export default Selection;
