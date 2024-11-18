import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authcontext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected page
  return children;
};

export default PrivateRoute;
