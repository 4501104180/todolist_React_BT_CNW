import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from "../../../../context/TodoContext";
import "./NewTodoForm.css";

function NewTodoForm() {
  const [userInput, setUserInput] = useState('');
  const [DLInput, setDLInput] = useState('');
  const { createTodo } = useContext(TodoContext);

  const handleChange = evt => {
    setUserInput(evt.target.value);
  };
  const DLhandleChange = evt => {
    setDLInput(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = { id: uuidv4(), title: userInput, deadline: DLInput, completed: false };
    createTodo(newTodo);
    setUserInput('');
    setDLInput('');
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={userInput}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <input
        value={DLInput}
        onChange={DLhandleChange}
        id="task"
        type="date"
        name="task"
        placeholder="Deadline"
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm; 
