import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryid] = useState(null);

  useEffect(() => {
    Axios.get("https://opentdb.com/api_category.php").then((response) =>
      setCategories(response.data.trivia_categories)
    );
  }, []);

  return (
    <div className="category-container">
      <h4>Choose your category to start playing!</h4>
      {categories.map((category) => (
        <Link to="/quiz">
          <button value = {category.id} onClick={() => setCategoryid(category.id)}>
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
}
