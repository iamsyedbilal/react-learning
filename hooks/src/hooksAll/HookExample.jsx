import { useEffect } from "react";

function HookExample() {
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmounted");
    };
  }, []);
  return <div>hook example</div>;
}

export default HookExample;
