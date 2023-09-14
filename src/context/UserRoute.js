import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function UserRoute({ element }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return element;
}

export default UserRoute;
