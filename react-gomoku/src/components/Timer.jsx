import React, { useState, useEffect, useRef } from 'react';
import { UPDATE_BOARD, UPDATE_TURN } from './Game';
import '../App.css';


const Timer = ({ state, dispatch }) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(5);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    // 만약 타임 아웃이 발생했을 경우 랜덤한 위치에 바둑알 놓기
    if (time.current < 0) {
      let row = null;
      let col = null;

      while (1) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);

        if (state.board[row][col] === -1) break;
      }

      clearInterval(timerId.current);
      dispatch({ type: UPDATE_BOARD, coordinate: { row, col } });
      dispatch({ type: UPDATE_TURN });
    }
  }, [sec]);

  return (
    <div className="timer">
      {min} 분 {sec} 초
    </div>
  )
};

export default Timer;
