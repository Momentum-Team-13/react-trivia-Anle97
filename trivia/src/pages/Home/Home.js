import { Link } from "react-router-dom";
import "./Home.css";
import Axios from "axios";

export default function Home() {
  const getCategoryAPI = () => {
    Axios.get("https://opentdb.com/api_category.php").then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="home">
      <div className="category-selection">
        <h4>Choose your category to start playing!</h4>
        <select className="category-box">
          <option>
          </option>
        </select>

        <button onClick={getCategoryAPI}>
          Get Categories to print in the log
        </button>

      </div>
      <Link to="/quiz">
        <button>Start Game</button>
      </Link>
    </div>
  );
}
