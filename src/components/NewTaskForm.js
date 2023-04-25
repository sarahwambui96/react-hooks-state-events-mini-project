import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "code",
  })

  const formCategory= categories.map((category) =>{
    return <option key={category} >{category}</option>
  })

  function handleChange(e){
    setNewTask({...newTask, 
      [e.target.name]: e.target.value},
      )
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(newTask)
    onTaskFormSubmit(newTask)
    }


  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={newTask.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={newTask.category}>
          {formCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
