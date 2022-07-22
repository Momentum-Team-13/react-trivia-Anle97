import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Quiz from "./components/Quiz/Quiz.js";
import Home from "./components/Home/Home.js"
import Results from "./components/Results/Results.js";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
