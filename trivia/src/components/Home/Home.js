import { useState } from "react";
import { questionFetch } from "../../utils/opentdbAPI";
import Category from "../Category";

export default function Home({ categories }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  const clickHandler = (catId) => {
    questionFetch(catId)
    .then((response) => console.log(response))
  };

  return (
    <div className="category-container">
      <h4>Choose your category to start playing!</h4>
      {categories.map((category) => (
        <Category
          handleExpansion={handleExpansion}
          expanded={expanded}
          key={category.id}
          clickHandler={clickHandler}
          category={category}
        />
      ))}
    </div>
  );
}

// <button onClick={() => clickHandler(category.id)}>
/* <Link to="/quiz"> */
//   {category.name}
/* </Link> */
// </button>
