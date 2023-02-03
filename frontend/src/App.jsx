import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to="/">
          <h1 className="quiz__title">Ultimate WORLD K-pitals Quizzzz</h1>
        </NavLink>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
