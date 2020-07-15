import React from 'react';
import Tr from './Tr';

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length).fill().map((_, i) => <Tr rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />)}
    </table>
  );
};

export default Table;