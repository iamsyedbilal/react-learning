import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/About";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import Body from "./components/Body";
import ResturantMenu from "./components/ResturantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
