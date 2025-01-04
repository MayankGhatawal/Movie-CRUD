import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-gray-900">
      <h1 className="text-4xl font-bold text-red-400">404 Not Found</h1>
      <p className="text-lg mt-4">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
