import React from "react";

function CategoryFilter({categories, setFilter, taskFilter}) {  
const btn = categories.map((category) =>
  <button key={category} onClick={()=>setFilter(category)} className={taskFilter === category? "selected" : ""} >{category}</button>
)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */btn}
    </div>
  );
}

export default CategoryFilter;
