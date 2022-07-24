import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { questionFetch } from "../../utils/opentdbAPI";

export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [questionNumber, changeQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const location = useLocation();
  const idLocation = location.pathname;

  useEffect(() => {
    questionFetch(idLocation.slice(6)).then((response) =>
      setQuestions(response)
    );
  }, []);

  const x = () => {
    console.log(questions);
  };
  x();

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

  const answerChoices = [
    (questions[questionNumber].incorrect_answers[0]: false),
    (questions[questionNumber].incorrect_answers[1] : false),
    (questions[questionNumber].incorrect_answers[2] : false),
    (questions[questionNumber].correct_answer : true)
  ];

  const randomAnswerChoices = shuffle(answerChoices)

  const handleAnswerClick = () =>{ 
    if (questionNumber != questions.length - 1) {
      changeQuestion(questionNumber + 1);
    } else {
      setShowScore(true);
    }
  };

  const y = () => {
    console.log(randomAnswerChoices);
  };
  y();

  const z = () => {
    console.log(answerChoices);
  };
  z();

  return (
    <>
      {showScore ? (
        <div className="score">You got 1 out of 10 right!</div>
      ) : (
        <>
          <h2>Category chosen is : {questions[questionNumber].category}</h2>
          <div className="question">
            <h3>Question {questionNumber + 1}: {questions[questionNumber].question}</h3>
          </div>
          <div className="answer-choices">
            <button onClick={handleAnswerClick}>{randomAnswerChoices[0]}</button>
            <button onClick={handleAnswerClick}>{randomAnswerChoices[1]}</button>
            <button onClick={handleAnswerClick}>{randomAnswerChoices[2]}</button>
            <button onClick={handleAnswerClick}>{randomAnswerChoices[3]}</button>
          </div>
        </>
      )}
    </>
  );
}