import React from 'react';
import Todo from './Todo';
import '../App.css';


const Todos = ({ todoList, removeTodo, updateTodo }) => {
  return (
    <table className="table">
      {todoList.map((todo, i) => {
        return (
          <tr key={i + todo}>
            <Todo index={i} 
                  item={todo} 
                  removeTodo={removeTodo}
                  updateTodo={updateTodo} />
          </tr>
        );
      })}
    </table>
  );
};


export default Todos;