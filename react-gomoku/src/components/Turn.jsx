import React from 'react';
import '../App.css'


const Turn = ({ state }) => {
  return (
    <div className="turn">
      현재 순서 : {state.turn === 0 ? "검은돌" : "흰돌"}
    </div>
  )
};


export default Turn;