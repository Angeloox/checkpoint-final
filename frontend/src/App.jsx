import "./App.css";
import useFetch from "./services/useFetch";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <h1>European K-Pital</h1>
      <Quiz />
    </div>
  );
}

export default App;
