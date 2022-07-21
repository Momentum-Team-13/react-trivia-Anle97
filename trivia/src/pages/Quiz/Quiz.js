import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import { useState } from 'react'

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