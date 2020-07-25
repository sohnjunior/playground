import React from 'react';
import '../App.css';
import RestartButton from './RestartButton';
import StartButton from './StartButton';


const Info = ({ ready, turn, dispatch }) => {
  return (
    <div className="info">
      현재 순서 : { turn === 0 ? "검은돌" : "흰돌" }
      <div>
        <StartButton dispatch={dispatch} />
        <RestartButton ready={ready} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Info;