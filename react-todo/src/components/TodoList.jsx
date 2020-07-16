import React from 'react';
import Title from './Title';
import Menu from './Menu';
import InputForm from './InputForm';
import Todos from './Todos';
import '../App.css'

const TodoList = () => {
  return (
    <div className="todo-list">
      <Title />
      <Menu />
      <InputForm />
      <Todos />
    </div>
  );
};


export default TodoList;