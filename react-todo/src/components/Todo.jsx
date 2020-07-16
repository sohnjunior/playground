import React from 'react';
import '../App.css'

const Todo = ({ item }) => {
  return (
    <td className="todo">
      {item}
    </td>
  );
};


export default Todo;