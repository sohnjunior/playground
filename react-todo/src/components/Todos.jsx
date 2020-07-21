import React from 'react';
import Todo from './Todo';


const Todos = ({ todoList, removeTodo, updateTodo }) => {
  return (
    <table>
      <tbody>
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
      </tbody>
    </table>
  );
};


export default Todos;