import React from 'react';
import '../App.css';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Todo = ({ index, item, removeTodo, updateTodo }) => {
  const fontStyle = {
    "color": item[2],
  };

  return (
    <>
      <td className="todo" onClick={() => updateTodo(index)}>
        <span style={fontStyle} className={classNames({ highlight: item[1] })}>
          {item[0]}
        </span>
      </td>
      <td>
        <IconButton onClick={() => removeTodo(index)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </td>
    </>
  );
};


export default Todo;