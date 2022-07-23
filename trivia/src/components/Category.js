import React from "react";
import questionFetch from '../utils/opentdbAPI'

export default function Category({ expanded, handleExpansion, clickHandler, category }) {
    const x = () => {
        console.log(category)
    }
    // x()
  return (
    <div>
      <button onClick={() => clickHandler(category.id)} >{category.name}</button>
      {/* {expanded && <ul>
        </ul>} */}
    </div>
  );
}

