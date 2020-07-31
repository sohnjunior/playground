import React from 'react';
import '../App.css';
import BoardRow from './BoardRow';
import { useRef } from 'react';


const Board = ({ state, dispatch }) => {
  const squareSize = useRef(10);

  return (
    <table className="board">
      <tbody>
      {[...Array(squareSize.current)].map((_, i) => (
        <BoardRow key={i} squareSize={squareSize.current} row={i} state={state} dispatch={dispatch} />
      ))}
      </tbody>
    </table>
  );
};

export default Board;
