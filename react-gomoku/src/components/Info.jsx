import React from 'react';
import '../App.css';


const Info = ({ turn }) => {
  return (
    <div className="info">
      현재 순서 : { turn === 0 ? "검은돌" : "흰돌" }
    </div>
  );
};

export default Info;