import React from 'react';
import Timer from './Timer';
import Turn from './Turn';
import Winner from './Winner';
import '../App.css';


const MessageBox = ({ state, dispatch }) => {
  return (
    <div className="message-box">
      <Timer state={state} dispatch={dispatch} />
      <Turn state={state} />
      <Winner state={state} />
    </div>
  )
};

export default MessageBox;