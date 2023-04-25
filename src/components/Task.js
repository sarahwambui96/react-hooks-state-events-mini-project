import React from "react";

function Task(props) {
  const {text, category, taskDelete}= props
 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>taskDelete(text)}>X</button>
    </div>
  );
}

export default Task;
