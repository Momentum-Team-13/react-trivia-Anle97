import { Link } from "react-router-dom"
import "./Header.css"

export default function Header () {
    return (
        <div className="headerBox">
            <Link to="/" className="header">
                <h1>QuizKids Trivia Game!</h1>
            </Link>
        </div>
    )
}
    