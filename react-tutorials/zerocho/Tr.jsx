import React from 'react';
import Td from './Td';

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((_, i) => <Td rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} dispatch={dispatch} >{''}</Td>)}
    </tr>
  )
};

export default Tr;