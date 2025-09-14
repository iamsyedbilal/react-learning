import Header from "./components/Header";
import { Outlet } from "react-router";

// * Modularity is also known as:
// * Chunking
// * Code Splitting
// * Dynamic Bundling
// * Lazy Loading
// * On-Demand Loading
// * Dynamic Import

function App(params) {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
