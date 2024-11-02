import React, { useState } from "react";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-slate-900 flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-orange-500  flex justify-center items-center h-10 w-10 rounded-full bg-slate-600 font-bold">
          {" "}
          {count}
        </h2>
        <div>
          <button
            onClick={() => setCount(count + 1)}
            className="h-10 w-10 rounded-md bg-slate-600 text-white m-10 "
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="h-10 w-10 rounded-md bg-slate-600 text-white m-10 "
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCounter;
