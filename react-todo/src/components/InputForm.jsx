import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
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
      <Input
        ref={focus}
        type="text"
        value={todo}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
        placeholder="오늘 할일"
      />
      <Button
        id="button"
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        {" "}
        추가{" "}
      </Button>
    </div>
  );
};

export default InputForm;