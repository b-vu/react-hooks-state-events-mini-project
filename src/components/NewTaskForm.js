import {React, useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [form, setForm] = useState({
    text: "",
    category: "All"
  });

  const handleFormChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    onTaskFormSubmit(form);
    setForm({
      ...form,
      text: ""
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormChange} value={form.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormChange} value={form.category}>
          {/* render <option> elements for each category here */}
          {
            categories.map(category => {
              return <option key={category}>{category}</option>
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
