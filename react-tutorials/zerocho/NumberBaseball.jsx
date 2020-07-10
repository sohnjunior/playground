import React, { useState, memo, useRef, useEffect } from 'react';
import Try from './Try';

// 숫자 4개 랜덤 추출
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }

  return array;
}

const NumberBaseball = memo(() => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [trials, setTrials] = useState([]);
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런!');
      setTrials(prevTrials => [...prevTrials, { try: value, result: '홈런!' }]);
      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers());
      setTrials([]);
      inputRef.current.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (trials.length > 10) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTrials([]);
        inputRef.current.focus();
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTrials((prevTrials) => [...prevTrials, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }]);
        setValue('');
      }
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  })

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {trials.length}</div>
      <ul>
        {trials.map((v, i) => {
          return (
            <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
          );
        })}
      </ul>
    </>
  );
});


export default NumberBaseball;

