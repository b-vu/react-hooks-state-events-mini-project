import {React, useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterCategory, setFilterCategory] = useState(null);
  const [updatedTasks, setUpdatedTasks] = useState(TASKS);

  const handleFilterButtonClick = filter => {
    setFilterCategory(filter);
  }

  const handleDeletedTask = tasktoDelete => {
    setUpdatedTasks(updatedTasks.filter(task => task.text !== tasktoDelete));
  }

  const handleNewTask = task => {
    setUpdatedTasks(updatedTasks => [...updatedTasks, task]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterCategory={filterCategory} onFilterButtonClick={handleFilterButtonClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={updatedTasks} filter={filterCategory} handleDeletedTask={handleDeletedTask}/>
    </div>
  );
}

export default App;
