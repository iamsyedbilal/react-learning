import { useState, useReducer } from "react";

/** 
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>reset counter</button>
    </div>
  );
}

*/

const initialState = 0;

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;

    default:
      return state;
  }
}

function Counter() {
  // useReducer is a React Hook that lets you add a reducer to your component.
  //   It takes multiple args and return one answer
  const [count, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset counter</button>
    </div>
  );
}

export default Counter;
