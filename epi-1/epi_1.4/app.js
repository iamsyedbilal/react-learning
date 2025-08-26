/**
 * In this episode, we are learning:
 * - How to create nested elements with React
 * - How to add sibling elements
 *
 * Example structure we want to build:
 *
 * <div id="parent">
 *   <div id="child">
 *     <h1>Hi, I am the nested element</h1>
 *     <h2>I am the sibling</h2>
 *   </div>
 * </div>
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

// Creating nested elements and siblings using React.createElement
const div = React.createElement(
  "div",
  { id: "parent" }, // parent div
  React.createElement(
    "div",
    { id: "child" }, // child div
    [
      // children of "child" (siblings)
      React.createElement("h1", {}, "Hi, I am the nested element"),
      React.createElement("h2", {}, "I am the sibling"),
    ]
  )
);

// Rendering the created element inside root
root.render(div);

/**
 * ⚠️ Notice:
 * - The syntax is difficult and hard to maintain.
 * - That’s why JSX (JavaScript XML) is introduced, which makes writing UI much simpler.
 */
