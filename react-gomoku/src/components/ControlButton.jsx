import React from 'react';
import Button from './Button';
import { GAME_START, RESET_BOARD } from './Game';


const ControlButton = ({ ready, dispatch }) => {

  const handleClick = () => {
    if (ready) {
      dispatch({ type: GAME_START });
    } else {
      dispatch({ type: RESET_BOARD });
    }
  };

  return (
    <Button handleClick={handleClick}>
      { ready ? '게임시작!' : '다시하기' }
    </Button>
  )
};


export default ControlButton;