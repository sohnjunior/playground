import React from 'react';
import '../App.css'
import Stone from '../components/Stone';
import { UPDATE_BOARD, UPDATE_TURN } from './Game';


const Square = ({ row, col, state, dispatch }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch({ type: UPDATE_BOARD, coordinate: { row, col } });
    dispatch({ type: UPDATE_TURN });
  };

  return (
    <td className="square" onClick={handleClick}>
      <Stone state={state.board[row][col]} />
    </td>
  );
};


export default Square;
