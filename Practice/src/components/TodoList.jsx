import React from "react";
import { useState } from "react";
import CardForTask from "./CardForTask";

const TodoList = () => {
  const [task, setTask] = useState([]);
  const handleClick = () => {
    const newTask = document.querySelector("#todo");
    setTask([...task, newTask.value]);
    newTask.value = "";
  };
  return (
    <div>
      {task.map((todo) => (
        <CardForTask key={Math.random() * 10} task={todo}></CardForTask>
      ))}
      <input
        type="text"
        placeholder="Enter your task"
        id="todo"
        onKeyDown={(e) => {
          if (e.key == "Enter") handleClick();
        }}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default TodoList;
