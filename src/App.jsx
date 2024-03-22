import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import logo from './assets/images/question.png';
import clickSound from './assets/sounds/clicksound.mp3';

import {
  Modal,
  Ant,
  DarkMode,
  AnswerBox,
  SelectCategory,
  Result,
  LanguageSelector,
} from './import';

import './App.css';
import './dark-mode.css';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(-1);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [isCorrect, setIsCorrect] = useState({ correct: [], incorrect: [] });
  const [showResult, setShowResult] = useState(false);
  const [switchMode, setSwitchMode] = useState(false);
  const [glob, setGlob] = useState('Programming');
  const [categories, setCategories] = useState([]);
  const [locale, setLocale] = useState('ru');

  useEffect(() => {
    axios
      .get('https://65dcaae6e7edadead7ecaa67.mockapi.io/Quiz/v1/users')
      .then((res) => {
        const uniqueCategories = res.data.flatMap((elem) => elem.globalCategorys);
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error('Произошла ошибка при получении данных:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://myquiz.api.quickmocker.com/Quiz/${glob}/${locale}`)
      .then((response) => {
        setData(response.data);

        const categories = Array.from(new Set(response.data.map((question) => question.category)));
        setUniqueCategories(categories);
      })
      .catch((error) => {
        console.error('Произошла ошибка при получении данных:', error);
      });
  }, [glob, locale]);

  useEffect(() => {
    document.body.style.backgroundColor = switchMode ? '#001529' : 'white';
  }, [switchMode]);

  const progressBar = Math.floor(((currentIndex + 1) / filteredQuestions.length) * 100);

  const step = (index) => {
    playSound(clickSound);
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
    playSound(clickSound);
    const filteredQuestions = data.filter((e) => e.category === category);
    setFilteredQuestions(filteredQuestions);
    setCurrentIndex(0);
    setCorrectAnswerCount(0);
  };

  const handleReset = () => {
    setCorrectAnswerCount(-1);
    setIsCorrect({ correct: [], incorrect: [] });
    setShowResult(false);
  };

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.volume = 0.3;
    audio.play();
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="menu">
        <>
          <img
            src={logo}
            className={`logo ${showResult ? 'anim' : ''}`}
            title="Click to reset"
            onClick={handleReset}
          />
        </>

        <Ant
          switchMode={switchMode}
          categories={categories}
          setGlob={setGlob}
          setCategories={setCategories}
          handleReset={handleReset}
          t={t}
        />

        <LanguageSelector
          setCorrectAnswerCount={setCorrectAnswerCount}
          setIsCorrect={setIsCorrect}
          setLocale={setLocale}
          locale={locale}
          t={t}
          i18n={i18n}
          switchMode={switchMode}
          setUniqueCategories={setUniqueCategories}
        />

        <DarkMode setSwitchMode={setSwitchMode} />
      </div>

      <div className="main">
        {showResult ? (
          <Result
            filteredQuestions={filteredQuestions}
            isCorrect={isCorrect}
            switchMode={switchMode}
          />
        ) : (
          <>
            {correctAnswerCount === -1 ? (
              <SelectCategory
                switchMode={switchMode}
                t={t}
                uniqueCategories={uniqueCategories}
                categoryFilter={categoryFilter}
              />
            ) : (
              <>
                {currentIndex === filteredQuestions.length ? (
                  <Modal
                    filteredQuestions={filteredQuestions}
                    setShowResult={setShowResult}
                    isCorrect={isCorrect}
                    handleReset={handleReset}
                    t={t}
                    playSound={playSound}
                  />
                ) : (
                  <AnswerBox
                    answers={filteredQuestions[currentIndex].answer}
                    step={step}
                    filteredQuestions={filteredQuestions}
                    currentIndex={currentIndex}
                    switchMode={switchMode}
                    progressBar={progressBar}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
