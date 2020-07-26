import React from 'react';
import Button from './Button';
import { GO_BACK } from './Game';


const BackButton = ({ state, dispatch }) => {

  const handleClick = () => {
    dispatch({ type: GO_BACK });
  };

  const disabled = state.history.length && state.winner === -1 ? false : true;

  return (
    <Button handleClick={handleClick} disabled={disabled}>
      한수 무르기
    </Button>
  );
};


export default BackButton;