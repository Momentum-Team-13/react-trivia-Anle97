import { Link } from 'react-router-dom'
import { useState } from 'react'
import App from '../../App'

export default function Quiz() {
    return (
      <div className="quiz">
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