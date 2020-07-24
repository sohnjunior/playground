import React from 'react';
import '../App.css';


const Stone = ({ state }) => {
  return (
    <div>
      {
        state === -1 
        ? '' 
        : state === 0 
        ? <div className="black-stone" /> 
        : <div className="white-stone" />
      }
    </div>
  )
};


export default Stone;