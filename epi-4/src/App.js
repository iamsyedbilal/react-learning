import Header from "./components/Header";
import { Outlet } from "react-router";

// * Modularity is also known as:
// * Chunking
// * Code Splitting
// * Dynamic Bundling
// * Lazy Loading
// * On-Demand Loading
// * Dynamic Import

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header always visible */}
      <Header />
      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
