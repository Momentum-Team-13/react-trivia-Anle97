import { Link } from "react-router-dom";

export default function Home({ categories }) {
  return (
    <div className="category-container">
      <h4>Choose your category to start playing!</h4>
      {categories.map((category) => (
        <Link to={`/quiz/${category.id}`} key={category.id}>
          {category.name}
          <br></br>
        </Link>
      ))}
    </div>
  );
}
