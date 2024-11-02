import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const handleTask = () => {
    const taskToAdd = document.querySelector("#task");
    setTask([...task, taskToAdd.value]);
    taskToAdd.value = "";
  };
  return (
    <div>
      {task.map((todo) => (
        <ul>{todo}</ul>
      ))}
      <input type="text" name="" id="task" placeholder="Enter task to add" />
      <button onClick={handleTask}>Add Task</button>
    </div>
  );
};

export default TodoList;
