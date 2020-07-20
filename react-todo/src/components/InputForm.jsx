import React from 'react';
import '../App.css'

const InputForm = ({ focus, todo, setTodo, setClick }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setClick(true);
    }
  };

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div className="input">
      <input ref={focus} type="text" value={todo} onChange={handleOnChange} onKeyPress={handleKeyPress} />
      <button onClick={handleClick}> 추가 </button>
    </div>
  );
};

export default InputForm;