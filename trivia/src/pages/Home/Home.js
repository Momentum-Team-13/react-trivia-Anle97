// NEED A FUNCTION FOR ONCLICK THAT WILL GO TO QUIZ PAGE AND TRANSFER THE CATEGORY ID AND VALUE OVER. THIS FUNCTION SHOULD LIVE IN APP.JS

import { Link } from "react-router-dom";
import "./Home.css";
import Axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    Axios.get("https://opentdb.com/api_category.php").then(
      (response) => setCategories(response.data.trivia_categories)
    );
  }, []);

  return (
    <div className="category-container">
      <h4>Choose your category to start playing!</h4>
      {categories.map((category) => (
        <div 
          className="category" 
          value={category.id} 
          onClick={() => console.log(category.id)}>
            {category.name}
        </div>
      ))}
    </div>
  );
}


// const handleCategoryChange = (e) => {
//   // categories(e.target.value);
//   console.log(e);
// };

{
  /* <Link to="/quiz">
        <button>Start Game</button>
      </Link> */
}

{
  /* /* {<select className="category-box" value="" onChange={handleCategoryChange}>
        <option value="">
          Choose here
        </option>
        {categories.map((category) => (
          <option 
            value={category.id}
            >
              >{category.name}
          </option>
        ))}
      </select>} */
}
