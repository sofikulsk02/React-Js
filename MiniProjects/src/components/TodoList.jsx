import React from "react";

const TodoList = () => {
  const [task, setTask] = React.useState([]);
  const handleSubmit = () => {
    const taskInfo = document.querySelector("#input");
    const newtask = taskInfo.value;
    setTask([...task, newtask]);
    taskInfo.value = "";
  };
  const handleDelete = () => {
    const deleted = document.querySelector("#delete");
  };
  return (
    <div className="bg-slate-700 h-[100vh] w-[100vw] flex justify-center items-center">
      <div>
        <div className="flex bg-slate-300 justify-between items-center h-[100px] w-[400px] rounded-2xl">
          <input
            type="text"
            name=""
            id="input"
            className="w-[75%] rounded-3xl ml-2 border border-black text-center"
            placeholder="Enter task to add"
          />
          <button
            className="h-[30px] w-[20%] rounded-3xl bg-slate-400"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
        {task.map((todo) => {
          return (
            <div className="flex justify-center items-center bg-red-300 overflow-hidden rounded-3xl mt-2"></div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
