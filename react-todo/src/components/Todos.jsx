import React from 'react';
import Todo from './Todo';


const Todos = ({ todoList }) => {
  return (
    <table>
      <tbody>
        { todoList.map( (todo, i) => <tr key={i + todo}><Todo item={todo}/></tr> ) }
      </tbody>
    </table>
  );
};


export default Todos;