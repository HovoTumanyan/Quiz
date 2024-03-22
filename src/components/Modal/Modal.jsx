import { useState, useEffect, useRef } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Confetti from 'react-confetti';
import winer from '../../assets/sounds/winer.mp3';
import lose from '../../assets/sounds/lose.mp3';
import './Modal.css'

export default function Modal({ playSound, filteredQuestions, setShowResult, isCorrect, handleReset, t }) {
  const modalBoxRef = useRef(null);
  const [countitAndProBar, setCountitAndProBar] = useState({ countit: 0, pro: 0 });
  const [confettiSize, setConfettiSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const modalBoxRect = modalBoxRef.current.getBoundingClientRect();
    setConfettiSize({ width: modalBoxRect.width, height: modalBoxRect.height });

    const timeout = setTimeout(() => {
      const progress = Math.floor((isCorrect.correct.length / filteredQuestions.length) * 100);
      setCountitAndProBar((prevState) => ({ ...prevState, pro: progress }));

      if (!isCorrect.correct.length || progress < 60) {
        playSound(lose);
      } else {
        playSound(winer);
      }

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
    <div className="modalBox" style={{ position: 'relative' }} ref={modalBoxRef}>
      {countitAndProBar.pro >= 60 && (
        <Confetti
          width={confettiSize.width}
          height={confettiSize.height}
          numberOfPieces={800}
          gravity={0.1}
          wind={0}
          recycle={false}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <ProgressBar
        containerStyle={{
          marginBottom: '0px',
          backgroundColor: 'red',
          borderRadius: '0px',
          height: '5px',
        }}
        percentStyle={{
          width: `${countitAndProBar.pro}%`,
          borderRadius: '0px',
          height: '5px',
        }}
      />
      <div className="modalContent">
        <div>
          <h2>{t('answer')}</h2>
          <pre>{countitAndProBar.countit}%</pre>
        </div>
        <button onClick={handleReset}>Quiz</button>
        <button onClick={() => setShowResult(true)}>Result</button>
      </div>
    </div>
  );
}
