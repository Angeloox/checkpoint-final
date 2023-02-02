import { useState, useEffect } from "react";
import useFetch from "../services/useFetch";
import "./Quiz.css";

function Quiz() {
  const [currentCapital, setCurrentCapital] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");

  const { data: capitals } = useFetch({
    path: "/capitals",
    method: "get",
  });

  useEffect(() => {
    if (capitals) {
      setCurrentCapital(capitals[Math.floor(Math.random() * capitals.length)]);
    }
  }, [capitals]);

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === currentCapital?.capital.toLowerCase()) {
      setMessage("You are a genius !");
    } else {
      setMessage("You are a dumb !");
    }
  };

  return (
    <div className="quiz__container">
      <div className="quiz__country">
        <h2>What is the capital of {currentCapital?.country}?</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userAnswer} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Quiz;
