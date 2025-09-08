import { useRouteError } from "react-router";

function ErrorComponent(params) {
  const err = useRouteError();
  return (
    <div className="text-center">
      <h1>{err.status}❌👎</h1>
      <h6>{err.data}</h6>
    </div>
  );
}

export default ErrorComponent;
