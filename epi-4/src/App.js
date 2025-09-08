import Header from "./components/Header";
import { Outlet } from "react-router";

function App(params) {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
