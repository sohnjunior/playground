import React from 'react';
import '../App.css'

const InputForm = ({ focus, todo, setTodo, setClick }) => {

  return (
    <div className="input">
      <input ref={focus} type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={() => setClick(true)}> 추가 </button>
    </div>
  );
};

export default InputForm;