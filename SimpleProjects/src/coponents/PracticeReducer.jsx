import React, { useReducer, useState } from "react";
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch ([action.type, action.payload]) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
      break;
    case "reset":
      return {
        ...state,
        count: 0,
      };
      break;
    case "increaseByAmount":
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;
    case "decreaseByAmount":
      return {
        ...state,
        count: state.count - action.payload,
      };
      break;
    default:
      return;
      break;
  }
};
const PracticeReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{state.count}</p>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        Reset
      </button>
      <input
        value={count}
        type="text"
        onChange={(e) =>
          dispatch({
            payload: e.target.value,
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: "increaseByAmount",
          })
        }
      >
        AddByAmount
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decreaseByAmount",
          })
        }
      >
        {" "}
        DecreaseByAmount
      </button>
    </div>
  );
};
export default PracticeReducer;
