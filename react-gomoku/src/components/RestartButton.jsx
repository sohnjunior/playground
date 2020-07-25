import React from 'react';
import Button from './Button';
import { RESET_BOARD } from './Game';


const RestartButton = ({ ready, dispatch }) => {
  
  const handleClick = () => {
    dispatch({ type: RESET_BOARD });
  };

  return (
    <Button handleClick={handleClick} disabled={ready}>
      다시하기
    </Button>
  )
};


export default RestartButton;