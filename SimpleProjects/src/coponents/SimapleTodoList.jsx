import React, { useState } from "react";

const SimapleTodoList = () => {
  const [task, setTask] = useState([]);
  const handleAddTask = () => {
    const taskData = document.querySelector("#input");
    const newTask = taskData.value;
    setTask([...task, newTask]);
    taskData.value = "";
  };
  return (
    <div className="flex h-[100vh] w-[100vw] bg-slate-600 justify-center items-center">
      <div className="flex">
        {task.map((task) => {
          return (
            <li className="bg-orange-500 text-white ml-10 rounded-md p-2">
              {task}
            </li>
          );
        })}
      </div>
      <input type="text" placeholder="Enter task to add" id="input" />
      <button
        onClick={handleAddTask}
        className="h-10 w-20 ml-10 bg-green-600 rounded-md"
      >
        Add task
      </button>
    </div>
  );
};

export default SimapleTodoList;
