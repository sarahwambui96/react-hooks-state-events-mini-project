import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App(){
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  console.log(setCategories)
  const [taskFilter, setTaskFilter] = useState("All")

   function taskDelete(para){
     setTasks(tasks.filter((task) =>task.text !== para))
     }

     function onTaskFormSubmit(addedTask){
      setTasks(...tasks, addedTask)
     }
     
     const filteredTasks = tasks.filter((item) => {
      if(taskFilter === "All"){
        return true
      }else {
        return taskFilter === item.category
      }
     })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={categories} setFilter={setTaskFilter} taskFilter={taskFilter}/>
      <NewTaskForm  categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks}  taskDelete={taskDelete}/>
    </div>
  );
}

export default App;
