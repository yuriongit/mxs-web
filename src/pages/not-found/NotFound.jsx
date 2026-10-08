import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="text-white">
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
