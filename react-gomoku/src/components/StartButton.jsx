import React from 'react';
import Button from './Button';
import { GAME_START } from './Game';


const StartButton = ({ dispatch }) => {

  const handleClick = () => {
    dispatch({ type: GAME_START });
  };

  return (
    <Button handleClick={handleClick}>
      게임시작!
    </Button>
  )
};


export default StartButton;