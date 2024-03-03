export default function AnswerBox({ answers, step }) {
  return (
    <div className="row answerBox">
      {answers.map((elem, index) => (
        <div
          className="col-sm answer"
          key={index}
          onClick={() => setTimeout(() => step(index), 100)}
        >
          <p>{elem}</p>
        </div>
      ))}
    </div>
  );
}
