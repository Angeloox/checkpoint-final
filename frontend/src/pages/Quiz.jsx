import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../services/useFetch";
import Question from "../components/Question";
import Response from "../components/Responses";
import utils from "../services/utils";
import "./Quiz.css";

function Quiz({ setScore, score }) {
  const [currentCapital, setCurrentCapital] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [message, setMessage] = useState("");
  const [answers, setAnswers] = useState([]);

  const { data: capitals } = useFetch({
    path: "/capitals",
    method: "get",
  });

  function fetchAnswers(capital) {
    setAnswers(
      utils.shuffleArray([
        capitals[Math.floor(Math.random() * capitals.length)],
        capitals[Math.floor(Math.random() * capitals.length)],
        capitals[Math.floor(Math.random() * capitals.length)],
        capital,
      ])
    );
  }

  useEffect(() => {
    if (capitals) {
      const capital = capitals[Math.floor(Math.random() * capitals.length)];
      setCurrentCapital(capital);
      fetchAnswers(capital);
    }
  }, [capitals]);

  function handleEvent(userResponse) {
    if (userResponse === currentCapital.capital) {
      setMessage("What a Genius !");
      setScore(score + 1);
    } else {
      setMessage("What a Dumb !");
    }
    setCurrentQuestion(currentQuestion + 1);
    const capital = capitals[Math.floor(Math.random() * capitals.length)];
    setCurrentCapital(capital);
    fetchAnswers(capital);
  }

  return (
    <div className="quiz__card">
      <h2 className="question__number">
        Question {currentQuestion + 1} out of 10
      </h2>
      <Question currentCapital={currentCapital} />
      <Response
        answers={answers}
        onClick={(userResponse) => {
          handleEvent(userResponse);
        }}
      />
      <p>{message && message}</p>
    </div>
  );
}

export default Quiz;
