import React, { useCallback, useRef, useEffect } from 'react';
import { CLICK_CELL } from './TicTacToe'; 

const Td = ({ rowIndex, cellIndex, cellData, dispatch }) => {
  console.log('tdtdtdtd');

  const ref = useRef([]);
  useEffect(() => {
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
  }, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickId = useCallback(() => {
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return (
    <td onClick={onClickId} dispatch={dispatch}>{cellData}</td>
  )
};

export default Td;