import "./App.css";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js"
import Home from "./pages/Home/Home.js";
import Quiz from "./pages/Quiz/Quiz.js";
import Results from "./pages/Results/Results.js";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
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
