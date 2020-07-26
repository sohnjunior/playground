import React from 'react';
import '../App.css';
import RestartButton from './ControlButton';
import BackButton from './BackButton';



const Info = ({ state, dispatch }) => {
  return (
    <div className="info">
      <RestartButton ready={state.ready} dispatch={dispatch} />
      <BackButton state={state} dispatch={dispatch} />
    </div>
  );
};

export default Info;