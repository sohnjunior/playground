import React from 'react';
import '../App.css'


const Winner = ({ state }) => {
  return (
    <div className="winner">
      {
        state.winner === 0
        ? '검은돌 승리!'
        : state.winner === 1
        ? '흰돌 승리!'
        : state.winner === 2
        ? '무승부'
        : '' 
      }
    </div>
  );
};


export default React.memo(Winner);