import React from "react";

import { Link } from "react-router-dom";

import CustomButton from "../components/button";

const NotFound: React.FC = () => {
  return (
    <div className="full-screen-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4 text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/">
          <CustomButton width={"auto"}>Go to Home</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
