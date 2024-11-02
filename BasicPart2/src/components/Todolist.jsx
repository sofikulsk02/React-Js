import React from "react";

const Todolist = () => {
  const [task, setTask] = React.useState([]);
  const setTodo = (event) => {
    const data = document.querySelector("#do");
    setTask([...task, data.value]);
    data.value = "";
  };
  return (
    <div>
      <p>
        {task.map((ele) => (
          <li>{[ele]}</li>
        ))}
      </p>
      <input type="text" placeholder="enter your task" id="do" />
      <button onClick={setTodo}>Add task</button>
    </div>
  );
};

export default Todolist;
