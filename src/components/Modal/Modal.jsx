import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function Modal({
  setCorrectAnswerCount,
  filteredQuestions,
  setShowResult,
  setIsCorrect,
  isCorrect
}) {
  const [countitAndProBar, setCountitAndProBar] = useState({
    countit: 0,
    pro: 0,
  });

  const handleReset = () => {
    setCorrectAnswerCount(-1);
    setIsCorrect({ correct: [], incorrect: [] });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const progress = Math.floor((isCorrect.correct.length / filteredQuestions.length) * 100);
      setCountitAndProBar((prevState) => ({ ...prevState, pro: progress }));

      if (countitAndProBar.countit < progress) {
        const interval = setInterval(() => {
          setCountitAndProBar((prevState) => {
            if (prevState.countit + 1 >= progress) {
              clearInterval(interval);
            }
            return { ...prevState, countit: prevState.countit + 1 };
          });
        }, 7);
        return () => clearInterval(interval);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="modalBox">
      <ProgressBar
        containerStyle={{
          marginBottom: '0px',
          backgroundColor: 'red',
          borderRadius: '0px',
          height: '5px',
        }}
        percentStyle={{ width: `${countitAndProBar.pro}%`, borderRadius: '0px', height: '5px' }}
      />
      <div className="modalContent">
        <div>
          <h2>Вы ответили правильно</h2>
          <pre>{countitAndProBar.countit}%</pre>
        </div>
        <button onClick={handleReset}>Quiz</button>
        <button onClick={() => setShowResult(true)}>Result</button>
      </div>
    </div>
  );
}
