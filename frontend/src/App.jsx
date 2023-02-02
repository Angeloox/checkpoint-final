import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <h1>Ultimate WORLD K-pitals Quizzzz</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
