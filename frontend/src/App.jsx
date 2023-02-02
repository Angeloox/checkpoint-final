import { useState } from "react";
import "./App.css";
import Quiz from "./pages/Quiz";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>European K-Pitals</h1>
      <h2>Current Score: {score}</h2>
      <Quiz setScore={setScore} score={score} />
    </div>
  );
}

export default App;
