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
  const [fontColor, setFontColor] = useState('black');
  const mounted = useRef(false);
  const focus = useRef(null);

  const handleRemove = (idx) => {
    const newList = [...todoList];
    newList.splice(idx, 1);
    setTodoList(newList);
  };

  const handleUpdate = (idx) => {
    const newList = todoList.map((todo, i) => {
       return i === idx ? [todo[0], !todo[1], todo[2]] : todo;
    });
    setTodoList(newList);
  };

  const handleColorChange = (color) => {
    setFontColor(color);
  }

  // useEffect 를 활용하여 자식 컴포넌트에서 클릭 이벤트 발생 시 새로운 글 추가
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (click) {
        // 새로운 할일 추가
        setTodoList((prev) => [...prev, [todo, false, fontColor]]);
        setTodo('');
        setClick(false);
        focus.current.focus();
      }
    }
  }, [click, todo]);

  return (
    <div className="todo-list">
      <Title />
      <Menu selectedColor={fontColor} colorChange={handleColorChange} />
      <InputForm
        focus={focus}
        todo={todo}
        setTodo={setTodo}
        setClick={setClick}
      />
      <Todos
        todoList={todoList}
        removeTodo={handleRemove}
        updateTodo={handleUpdate}
      />
    </div>
  );
};


export default TodoList;