import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404 Not found</h1>
          <p className="py-6">
            The resource requested could not be found on this server.
          </p>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            BACK TO HOME PAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
