import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { questionFetch } from "../../utils/opentdbAPI";

export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [questionNumber, changeQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const location = useLocation();
  const idLocation = location.pathname;

  const handleAnswerClick = (answerChoices) => {
    if (questionNumber != questions.length - 1) {
      changeQuestion(questionNumber + 1);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    questionFetch(idLocation.slice(6)).then((response) =>
      setQuestions(response)
    );
  }, []);

  const answerChoices = [
    questions[questionNumber].incorrect_answers[0],
    questions[questionNumber].incorrect_answers[1],
    questions[questionNumber].incorrect_answers[2],
    questions[questionNumber].correct_answer,
  ];

  const x = () => {
    console.log(questions);
  };
  x();

  // const y = () => {
  //   console.log(answerChoices);
  // };
  // y();

  return (
    <>
      {showScore ? (
        <div className="score">You got 1 out of 10 right!</div>
      ) : (
        <>
          <h2>Category chosen is : {questions[questionNumber].category}</h2>
          <div className="question">
            <h3>{questions[questionNumber].question}</h3>
          </div>
          <div className="answer-choices">
            <button onClick={handleAnswerClick}>{answerChoices[0]}</button>
            <button onClick={handleAnswerClick}>{answerChoices[1]}</button>
            <button onClick={handleAnswerClick}>{answerChoices[2]}</button>
            <button onClick={handleAnswerClick}>{answerChoices[3]}</button>
          </div>
        </>
      )}
    </>
  );
}
