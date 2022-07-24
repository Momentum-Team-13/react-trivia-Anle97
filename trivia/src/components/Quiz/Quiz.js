import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { questionFetch } from "../../utils/opentdbAPI";

export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [questionNumber, changeQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0)

  const location = useLocation();
  const idLocation = location.pathname;

  useEffect(() => {
    questionFetch(idLocation.slice(6))
    .then((response) => setQuestions(response))
  }, [])

  if (!questions) {
    return <>Loading page..</>
  }

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const answerChoices = [
    questions[questionNumber].incorrect_answers[0],
    questions[questionNumber].incorrect_answers[1],
    questions[questionNumber].incorrect_answers[2],
    questions[questionNumber].correct_answer,
  ];

  const randomAnswerChoices = shuffle(answerChoices);

  const handleAnswerClick = (answer) => {
    if (answer === questions[questionNumber].correct_answer) {
      setScore(score + 1)
      }
    if (questionNumber != questions.length - 1) {
      changeQuestion(questionNumber + 1)
    } else {
      setShowScore(true);
    }
  };
  
  // console.log(score)
  // console.log(questions[questionNumber].correct_answer);

  return (
    <>
      {showScore ? (
        <div className="score">You got {score} out of 10 right!</div>
      ) : (
        <>
          <h2>Game Category: {questions[questionNumber].category}</h2>
          <div className="question">
            <h3>
              Question {questionNumber + 1}:{" "}
              {questions[questionNumber].question}
            </h3>
          </div>
          <div className="answer-choices">
            {randomAnswerChoices.map(answer => {
              return <button onClick={() => handleAnswerClick(answer)}>{answer}</button>
            })}
          </div>
        </>
      )}
    </>
  );
}
