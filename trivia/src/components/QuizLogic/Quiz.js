import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { questionFetch } from "../../utils/opentdbAPI";

export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [questionNumber, changeQuestion] = useState(0);

  const location = useLocation();
  const idLocation = location.pathname;

  const next = () => {
    if (questionNumber != questions.length - 1) {
      changeQuestion(questionNumber + 1);
    }
  };

  const decodeHtml = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  useEffect(() => {
    questionFetch(idLocation.slice(6)).then((response) =>
      setQuestions(response)
    );
  }, []);

  const x = () => {
    console.log(questions);
  };
  x();

  return (
    <> 
      <h2>Category chosen is : {questions[questionNumber].category}</h2>
      <div className="question">
        <h3>{questions[questionNumber].question}</h3>
      </div>
      <div className="answer-choices">
        <ul>{questions[questionNumber].incorrect_answers[0]}</ul>
        <ul>{questions[questionNumber].incorrect_answers[1]}</ul>
        <ul>{questions[questionNumber].incorrect_answers[2]}</ul>
        <ul>{questions[questionNumber].correct_answer}</ul>
      </div>

      <div className="nav-buttons">
        <button onClick={next} id="next">
          Next
        </button>
      </div>
    </>
  );
}
