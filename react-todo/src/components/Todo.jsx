import React from 'react';
import '../App.css';
import classNames from 'classnames';
import { GoTrashcan } from "react-icons/go";


const Todo = ({ index, item, removeTodo, updateTodo }) => {
  const fontStyle = {
    "color": item[2],
  };

  return (
    <>
      <td 
        className="todo" 
        onClick={() => updateTodo(index)}>
        <span style={fontStyle} className={classNames({ 'highlight': item[1] })}>{item[0]}</span>
      </td>
      <td>
        <button onClick={() => removeTodo(index)}><GoTrashcan /></button>
      </td>
    </>
  );
};


export default Todo;