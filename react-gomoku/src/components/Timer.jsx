import React, { useState, useEffect, useRef } from 'react';
import { UPDATE_BOARD, UPDATE_TURN } from './Game';
import '../App.css';


const Timer = ({ state, dispatch }) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);
  
  useEffect(() => {
    // 만약 이전의 타이머가 존재한다면 삭제 후 재할당
    if (timerId.current) {
      clearInterval(timerId.current);
      time.current = 180;
      setMin(3);
      setSec(0);
    }

    // 게임이 시작된 이후에만 타이머 가동
    if (!state.ready) {
      timerId.current = setInterval(() => {
        setMin(parseInt(time.current / 60));
        setSec(time.current % 60);
        time.current -= 1;
      }, 1000);
    }

    return () => clearInterval(timerId.current);
  }, [state.turn, state.ready]);

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

      time.current = 180;
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
