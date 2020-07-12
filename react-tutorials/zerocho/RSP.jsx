import React, { useState, useRef, useEffect } from 'react';

// 클래스 라이프 사이클
/**
 * constructor -> render -> ref -> componentDidMount
 * (setState / props 바뀔 때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
 * 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
 */

const rspCoords = {
  '가위': -142,
  '바위': 0,
  '보': -284,
}

const scores = {
  '가위': 1,
  '바위': 0,
  '보': -1,
} 

const computerChoice = (imgCoord) => {
  return Object.keys(rspCoords).find(k => rspCoords[k] === imgCoord);
}

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = changeHand();
    return () => {
      clearInterval(interval.current);
    }
  }, [imgCoord]);

  const changeHand = () => {
    return setInterval(() => {
      if (imgCoord === rspCoords.바위) {
        setImgCoord(rspCoords.가위);
      } else if (imgCoord === rspCoords.가위) {
        setImgCoord(rspCoords.보);
      } else if (imgCoord === rspCoords.보) {
        setImgCoord(rspCoords.바위);
      }
    }, 80);
  };

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('비겼습니다!');
    } else if ([-1, 2].includes(diff)) {
      setResult('이겼습니다');
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult('졌습니다');
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      interval.current = changeHand();
    }, 1000);
  }

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord}px 0` }}></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}> 바위 </button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}> 가위 </button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}> 보 </button>
      </div>
      <div>{result}</div>
      <div> 현재 {score} 점</div>
    </>
  );
}


export default RSP;