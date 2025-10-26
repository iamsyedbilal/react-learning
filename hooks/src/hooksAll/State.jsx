import { useEffect, useRef, useState } from "react";
// import HookExample from "./hookExample";

function State() {
  // Use State
  const [inputValue, setInputValue] = useState("");
  // const [toggle, setToggle] = useState(true);

  //   Use Effect
  //Most useful place to use useEffect is fetching the data
  /**
 *   useEffect(() => {
    console.log("render");

    // useEffect also have a clean up function
    return () => {};

    // if we don't enter the empty dependency it is render everytime out state change
  }, []);
 */

  // It is like document.query selector to update the value in the tree
  const inputRef = useRef(null);

  useEffect(() => {
    // console.log(inputRef);

    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type Something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        Your Typed: <strong>{inputValue}</strong>
      </p>
      {/* {toggle && <HookExample />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </div>
  );
}

export default State;
