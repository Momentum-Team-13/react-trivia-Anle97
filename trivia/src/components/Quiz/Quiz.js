import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Axios from 'axios'
import Home from '../Home/Home'

export default function Quiz() {
  useEffect(() => {
    Axios
    .get(`https://opentdb.com/api.php?amount=10&category=10`)
    .then((response) =>
      console.log(response.data.results)
    );
  }, []);

    return (
      <div className="quiz">
        <Link to='/'>
            <button>
                Exit Game
            </button>
        </Link>
        <button>
            Submit Answer
        </button>
      </div>
    );
  }