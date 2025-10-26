import { useEffect, useLayoutEffect, useState } from "react";

function EffectComparision() {
  const [effectValue, setEffectValue] = useState("initial");
  const [layoutEffectValue, setLayoutEffectValue] = useState("initial");

  useEffect(() => {
    console.log("useEffect");
    setEffectValue("updated");
  }, []); //runs after the first render

  // useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    setLayoutEffectValue("updated");
  }, []); //runs after the first render but before the browser paints

  return (
    <div>
      <p>
        useEffect Value: <strong>{effectValue}</strong>
      </p>
      <p>
        useLayoutEffect Value: <strong>{layoutEffectValue}</strong>
      </p>
    </div>
  );
}

export default EffectComparision;
