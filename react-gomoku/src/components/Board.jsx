import React from 'react';
import '../App.css';
import BoardRow from './BoardRow';
import { useRef } from 'react';


const Board = ({ state, dispatch }) => {
  const squareSize = useRef(10);

  return (
    <table className="board">
      {[...Array(squareSize.current)].map((_, i) => (
        <BoardRow key={i} squareSize={squareSize.current} row={i} state={state} dispatch={dispatch} />
      ))}
    </table>
  );
};

export default Board;
