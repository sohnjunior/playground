import React from 'react';
import '../App.css'
import ColorBox from './ColorBox';


const color = [ 'black', 'red', 'blue', 'green' ];

const Menu = ({ selectedColor, colorChange }) => {
  return (
    <div className="menu">
      {color.map((c, idx) => (
        <ColorBox
          key={idx + c}
          boxColor={c}
          selectedColor={selectedColor}
          colorChange={colorChange}
        />
      ))}
    </div>
  );
};

export default Menu;