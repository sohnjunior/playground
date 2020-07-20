import React from 'react';
import Todo from './Todo';


const Todos = ({ todoList, removeTodo }) => {
  return (
    <table>
      <tbody>
        {todoList.map((todo, i) => <tr key={i + todo}><Todo index={i} item={todo} removeTodo={removeTodo} /></tr> ) }
      </tbody>
    </table>
  );
};


export default Todos;