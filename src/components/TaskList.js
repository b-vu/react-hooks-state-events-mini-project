import React from "react";
import Task from "./Task";

function TaskList({tasks, filter, handleDeletedTask}) {
  const tasksDisplayArray = tasks.map(task => {
    if(filter === "All" || task.category === filter){
      return <Task key={task.text} text={task.text} category={task.category} onDeleteButtonClick={handleDeletedTask}></Task>;
    }
    else{
      return null;
    }
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {
        filter ? tasksDisplayArray : tasks.map(task => <Task key={task.text} text={task.text} category={task.category} onDeleteButtonClick={handleDeletedTask}></Task>)
      }
    </div>
  );
}

export default TaskList;
