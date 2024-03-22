import './Result.css'
export default function Result({ filteredQuestions, isCorrect, switchMode }) {
  const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+([a-zA-Z]{2,})(\/[\w\-\.\/?%&=]*)?$/;

  return (
    <div className="-------">
      <div className="result">
        {filteredQuestions.map((elem, index) => (
          <div className={`sresult ${switchMode ? 'dark' : 'light'}`} key={index}>
            <div className="question">{elem.question}</div>
            <div className="answers">
              <ul
                className={`'' ${
                  elem.answer.some((answer) => urlRegex.test(answer)) ? 'resultUl' : ''
                }`}
              >
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
                      {urlRegex.test(answer) ? <img src={answer} /> : answer}
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
