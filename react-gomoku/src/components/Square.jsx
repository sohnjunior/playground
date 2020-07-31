import React from 'react';
import '../App.css'
import Stone from '../components/Stone';
import { UPDATE_BOARD, UPDATE_TURN } from './Game';


const Square = ({ row, col, state, dispatch }) => {

  const handleClick = (e) => {
    e.stopPropagation();

    // 만약 이미 돌이 놓여진 곳을 누르거나 아직 게임이 사작되지 않았다면 무시
    if (state.board[row][col] !== -1 || state.ready || state.winner !== -1) return;

    dispatch({ type: UPDATE_BOARD, coordinate: { row, col } });
    dispatch({ type: UPDATE_TURN });
  };

  return (
    <td className="square" onClick={handleClick}>
      <Stone state={state.board[row][col]} />
    </td>
  );
};


export default React.memo(Square);
