import React from 'react';
import '../App.css';
import RestartButton from './ControlButton';



const Info = ({ state, dispatch }) => {
  return (
    <div className="info">
      <div>
        <RestartButton ready={state.ready} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Info;