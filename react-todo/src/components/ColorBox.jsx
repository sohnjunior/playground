import React from 'react';
import '../App.css';
import classNames from 'classnames';

const ColorBox = ({ boxColor, selectedColor, colorChange }) => {
  return (
    <div
      style={{ backgroundColor: boxColor }}
      className={classNames("color-box", {
        select: boxColor === selectedColor,
      })}
      onClick={() => colorChange(boxColor)}
    />
  );
};

export default ColorBox;