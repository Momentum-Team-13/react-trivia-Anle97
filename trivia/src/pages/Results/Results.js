import { Link } from 'react-router-dom'

export default function Results() {
    return (
      <div className="results">
        <h1>Results page</h1>
        <Link to='/'>
            <button>
                Home Screen
            </button>
        </Link>
        <Link to='/quiz'>
            <button>
                Play Again
            </button>
        </Link>
      </div>
    );
  }