import ProgressBar from '../ProgressBar/ProgressBar';
import './AnswerBox.css'
export default function AnswerBox({
  answers,
  step,
  switchMode,
  filteredQuestions,
  currentIndex,
  progressBar,
}) {
  const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+([a-zA-Z]{2,})(\/[\w\-\.\/?%&=]*)?$/;

  return (
    <div
      className={`bigQuestionDiv container ${switchMode ? 'dark' : 'light'}`}
      style={{ maxWidth: '600px' }}
    >
      <h3>{filteredQuestions[currentIndex].question}</h3>
      <pre className="steps">
        {filteredQuestions.length}/{currentIndex + 1}
      </pre>
      <ProgressBar percentStyle={{ width: `${progressBar}%` }} />
      <div className="filteredQuestionsDiv container">
        <div className="row answerBox">
          {answers.map((elem, index) => (
            <div
              className="col-sm answer"
              key={index}
              onClick={() => setTimeout(() => step(index), 100)}
            >
              {urlRegex.test(elem) ? (
                <div className="flagsImage" style={{ backgroundImage: `url(${elem})` }}></div>
              ) : (
                elem
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
