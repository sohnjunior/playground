import React from 'react';
import Timer from './Timer';
import '../App.css';


const MessageBox = ({ state, dispatch }) => {
  return (
    <div className="message-box">
      <Timer state={state} dispatch={dispatch} />
      <div>
        현재 순서 : {state.turn === 0 ? "검은돌" : "흰돌"}
      </div>
    </div>
  )
};

export default MessageBox;