import React from 'react';
import '../App.css';

const Button = ({ ready, handleClick, children, disabled=false }) => {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: ready ? "#4dabf7" : "#ff8787" }}
      className="button"
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;