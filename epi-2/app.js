// Importing React core library
import React from "react";
// Importing ReactDOM for rendering
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {}, "Hey There Everyone");
root.render(heading);
