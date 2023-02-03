import { useState, useEffect } from "react";
import useFetch from "../services/useFetch";
import Question from "../components/Question";
import Response from "../components/Responses";
import utils from "../services/utils";
import "./Quiz.css";

function Quiz() {
  const [currentCapital, setCurrentCapital] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [goodAnswers, setGoodAnswers] = useState("");
  const [answers, setAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState("");
  const [score, setScore] = useState(0);
  const [color, setColor] = useState("base");
  // Utiliser un seul state initialisé à false et le setter à true pour message, goodAnswer, color...

  const { data: capitals } = useFetch({
    path: "/capitals",
    method: "get",
  });

  // Randomiser 4 question avec une boucle while pour sortir 4 réponses et une question différentes à chaque fois

  function fetchAnswers(capital) {
    const questions = [capital];
    while (questions.length < 4) {
      const oneCapital = capitals[Math.floor(Math.random() * capitals.length)];
      if (!questions.includes(oneCapital)) {
        questions.push(oneCapital);
      }
    }
    setAnswers(utils.shuffleArray(questions));
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
      setGoodAnswers("What a Genius ! You want a medal ?");
      setScore(score + 1);
      setWrongAnswers("");
      setColor("green");
    } else {
      setGoodAnswers("");
      setWrongAnswers(`It was ${currentCapital.capital}, asshole !`);
      setColor("red");
    }
    setCurrentQuestion(currentQuestion + 1);
    const capital = capitals[Math.floor(Math.random() * capitals.length)];
    setCurrentCapital(capital);
    fetchAnswers(capital);
    setColor("base");
  }

  return (
    <div className="quiz__card">
      <h2 className="quiz__question__number">
        Question {currentQuestion + 1} out of {capitals?.length}
      </h2>
      <Question currentCapital={currentCapital} />
      <Response
        color={color}
        answers={answers}
        setAnswers={setAnswers}
        onClick={(userResponse) => {
          handleEvent(userResponse);
        }}
      />
      <h2 className="quiz__score">Current Score: {score}</h2>
      <p className="quiz__goodAnswer">{goodAnswers && goodAnswers}</p>
      <p className="quiz__wrongAnswer">{wrongAnswers && wrongAnswers}</p>
    </div>
  );
}

export default Quiz;
