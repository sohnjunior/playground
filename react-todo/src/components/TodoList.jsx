import React, { useState, useRef } from 'react';
import Title from './Title';
import Menu from './Menu';
import InputForm from './InputForm';
import Todos from './Todos';
import '../App.css'
import { useEffect } from 'react';


const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [click, setClick] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const mounted = useRef(false);
  const focus = useRef(null);

  // useEffect 를 활용하여 자식 컴포넌트에서 클릭 이벤트 발생 시 새로운 글 추가
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (click) {
        // 새로운 할일 추가
        setTodoList((prev) => [...prev, todo]);
        setTodo('');
        setClick(false);
        focus.current.focus();
      }
    }
  }, [click, todo]);

  return (
    <div className="todo-list">
      <Title />
      <Menu />
      <InputForm focus={focus} todo={todo} setTodo={setTodo} setClick={setClick}/>
      <Todos todoList={todoList}/>
    </div>
  );
};


export default TodoList;