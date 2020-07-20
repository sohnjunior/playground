import React from 'react';
import '../App.css'

const Todo = ({ index, item, removeTodo }) => {
  return (
    <>
      <td className="todo">
        {item}
      </td>
      <td>
        <button onClick={() => removeTodo(index)}>삭제</button>
      </td>
    </>
  );
};


export default Todo;