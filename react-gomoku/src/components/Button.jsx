import React from 'react';
import '../App.css';

const Button = ({ handleClick, children, disabled = false }) => {
  return (
    <button className="button" onClick={handleClick} disabled={disabled}>
      { children }
    </button>
  )
};

export default Button;