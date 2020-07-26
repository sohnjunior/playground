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
    <Button ready={ready} handleClick={handleClick}>
      { ready ? '게임 시작!' : '게임 초기화' }
    </Button>
  )
};


export default ControlButton;