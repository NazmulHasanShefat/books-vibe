import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 px-6">
      <div className="text-center max-w-lg">
        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, renamed, or
          temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          {/* Home Button */}
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition duration-300"
          >
            Go Home
          </Link>

          {/* Support Button */}
          <Link
            to="/contact"
            className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-xl transition duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* Extra ecommerce style text */}
        <p className="text-sm text-gray-400 mt-10">
          Need help? Our support team is available 24/7.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
