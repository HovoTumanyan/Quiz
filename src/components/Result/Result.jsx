
export default function Result({ filteredQuestions, isCorrect,switchMode }) {

  return (
    <div className="-------">
    
      <div className="result">
        {filteredQuestions.map((elem, index) => (
          <div className={`sresult ${switchMode ? 'dark' : 'light'}`} key={index}>
            <div className="question">{elem.question}</div>
            <div className="answers">
              <ul>
                {elem.answer.map((answer, id) => {
                  const correctAns = isCorrect.correct.some(([questionIndex, unswerindex]) => {
                    return questionIndex === index && unswerindex === id;
                  });
                  const unCorrectAns = isCorrect.incorrect.some(
                    ([correctIndex, correctUnswerindex]) => {
                      return correctIndex === index && correctUnswerindex === id;
                    },
                  );
                  const itemList = `answer-item ${
                    correctAns ? 'correct' : unCorrectAns ? 'incorrect' : 'restDefault'
                  }`;
                  return (
                    <li key={id} className={itemList}>
                      {answer}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
