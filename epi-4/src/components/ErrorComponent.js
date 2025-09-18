import { useRouteError } from "react-router";

function ErrorComponent() {
  const err = useRouteError();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-2">
          {err.status || "404"} ❌
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          {err.data || "Oops! Something went wrong."}
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default ErrorComponent;
