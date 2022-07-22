import { useState, useEffect } from 'react'
import Axios from "axios";

export default function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      Axios.get("https://opentdb.com/api_category.php").then((response) =>
        setCategories(response.data.trivia_categories)
      );
    }, []);

    return(
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
    )
}