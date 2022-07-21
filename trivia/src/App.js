import "./App.css";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Quiz from "./components/Quiz/Quiz.js";
import Results from "./components/Results/Results.js";
import { useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("https://opentdb.com/api_category.php").then((response) =>
      setCategories(response.data.trivia_categories)
    );
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="category-container">
        <h4>Choose your category to start playing!</h4>
        {categories.map((category) => (
          <div
            className="category"
            value={category.id}
            onClick={() => console.log(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
      <div className="container">
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
