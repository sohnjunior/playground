import React from 'react';
import Square from './Square';


const BoardRow = ({ squareSize, row, state, dispatch }) => {
  return (
    <tr>
      {[...Array(squareSize)].map((_, i) => (
        <Square key={i} row={row} col={i} state={state} dispatch={dispatch} />
      ))}
    </tr>
  );
};


export default BoardRow;