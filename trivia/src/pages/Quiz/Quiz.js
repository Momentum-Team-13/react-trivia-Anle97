import { Link } from 'react-router-dom'

export default function Quiz() {
    return (
      <div className="quiz">
        <h1>Quiz page</h1>
        <Link to='/'>
            <button>
                Exit Game
            </button>
        </Link>
        <button>
            Submit
        </button>
      </div>
    );
  }