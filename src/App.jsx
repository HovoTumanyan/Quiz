import { useEffect, useState } from 'react';
import { Modal, Button, DarkMode, ProgressBar, AnswerBox, SelectCategory, Result } from './import';
import axios from 'axios';


import './dark-mode.css';

import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(-1);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [isCorrect, setIsCorrect] = useState({ correct: [], incorrect: [] });
  const [showResult, setShowResult] = useState(false);
  const [switchMode, setSwitchMode] = useState(false);

  useEffect(() => {
    axios
      .get(`https://65dcaae6e7edadead7ecaa67.mockapi.io/Quiz/v1/programming`)
      .then((response) => {
        setData(response.data);

        const categories = Array.from(new Set(response.data.map((question) => question.category)));
        setUniqueCategories(categories);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  const progressBar = Math.floor(((currentIndex + 1) / filteredQuestions.length) * 100);

  const step = (index) => {
    if (filteredQuestions[currentIndex].correct === index) {
      setCorrectAnswerCount((prevValue) => prevValue + 1);
      setIsCorrect((prevState) => ({
        ...prevState,
        correct: [...prevState.correct, [currentIndex, index]],
      }));
    } else {
      setIsCorrect((prevState) => ({
        ...prevState,
        incorrect: [...prevState.incorrect, [currentIndex, index]],
      }));
    }
    setCurrentIndex((prevValue) => prevValue + 1);
  };

  const categoryFilter = (category) => {
    const filteredQuestions = data.filter((e) => e.category === category);
    setFilteredQuestions(filteredQuestions);
    setCurrentIndex(0);
    setCorrectAnswerCount(0);
  };
 
  return (
    <div >
      <div className='menu'>
      <DarkMode setSwitchMode={setSwitchMode} />
      
      </div>
      
      {showResult ? (
        
        <Result filteredQuestions={filteredQuestions} isCorrect={isCorrect} switchMode={switchMode}/>
      ) : (
        <>
          {correctAnswerCount === -1 ? (
            <div className={`selectCategory ${switchMode ? 'dark' : ''}`}>
              <h1>Bыберите категорию для начала Quiz</h1>
              <SelectCategory>
                <Button uniqueCategories={uniqueCategories} categoryFilter={categoryFilter} />
              </SelectCategory>
            </div>
          ) : (
            <>
              {currentIndex === filteredQuestions.length ? (
                <Modal
                  setCorrectAnswerCount={setCorrectAnswerCount}
                  filteredQuestions={filteredQuestions}
                  setShowResult={setShowResult}
                  isCorrect={isCorrect}
                  setIsCorrect={setIsCorrect}
                  progressBar={progressBar}
                />
              ) : (
                <div
                  className={`bigQuestionDiv container ${switchMode ? 'dark' : 'light'}`}
                  style={{ maxWidth: '600px' }}
                >
                  <h3>{filteredQuestions[currentIndex].question}</h3>
                  <pre className="steps">
                    {filteredQuestions.length}/{currentIndex + 1}
                  </pre>
                  <ProgressBar percentStyle={{ width: `${progressBar}%` }} />
                  <div className="filteredQuestionsDiv container" style={{ maxWidth: '600px' }}>
                    <AnswerBox answers={filteredQuestions[currentIndex].answer} step={step} />
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
