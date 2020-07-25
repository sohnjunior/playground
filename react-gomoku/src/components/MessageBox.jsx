import React from 'react';
import Timer from './Timer';
import '../App.css';


const MessageBox = ({ state, dispatch }) => {
  return (
    <div className="message-box">
      <Timer state={state} dispatch={dispatch} />
    </div>
  )
};

export default MessageBox;