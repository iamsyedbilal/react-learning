// Create a root element where React components will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
// Create a React element (create the h1)
const heading = React.createElement(
  "h1",
  // Attributes for the element
  { id: "heading" },
  // Children (content inside the element)
  "Hey There Everyone"
);

// Render the element inside root
root.render(heading);
