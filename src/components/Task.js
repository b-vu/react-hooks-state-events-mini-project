import React from "react";

function Task({text, category, onDeleteButtonClick}) {
  const handleDeleteButtonClick = event => {
    onDeleteButtonClick(event.target.parentElement.children[1].textContent);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteButtonClick}>X</button>
    </div>
  );
}

export default Task;
