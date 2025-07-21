import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-6xl font-bold text-red-600 animate-pulse mb-4">
        ERROR 420 !!!
      </h1>

      <p className="text-2xl text-gray-300 animate-fade-in mb-8">
        Page Not Found
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 animate-bounce"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
