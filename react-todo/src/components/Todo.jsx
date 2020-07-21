import React from 'react';
import '../App.css'
import classNames from 'classnames';


const Todo = ({ index, item, removeTodo, updateTodo }) => {
  return (
    <>
      <td 
        className="todo" 
        onClick={() => updateTodo(index)}>
        <span className={classNames({ 'highlight': item[1] })}>{item[0]}</span>
      </td>
      <td>
        <button onClick={() => removeTodo(index)}>삭제</button>
      </td>
    </>
  );
};


export default Todo;