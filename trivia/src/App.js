import "./App.css";
import { useState, useEffect } from "react"
import { categoryFetch, questionFetch } from './utils/opentdbAPI'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Quiz from "./components/Quiz/Quiz.js";
import Home from "./components/Home/Home.js"
import Results from "./components/Results/Results.js";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryFetch()
    .then((response) => setCategories(response))
  },[])

  return (
    <BrowserRouter>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home categories={categories}/>} />
          <Route path="/quiz/:id" element={<Quiz categories={categories}/>} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
