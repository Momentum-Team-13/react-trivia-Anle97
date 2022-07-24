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
      alert("Nice job! That was correct.")
      setScore(score + 1);  
    } else {
      alert(`Oops! The correct answer was ${questions[questionNumber].correct_answer}`)
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
        <div className="score">You got {score} out of 10 right! Click the logo above to return to the home screen.</div>
      ) : (
        <>
          <h3>Game Category: {questions[questionNumber].category}</h3>

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
          <span>Current Score: {score}</span>
        </>
      )}
    </>
  );
}
