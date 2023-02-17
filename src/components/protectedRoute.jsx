import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const user = useSelector((state)=>state.usersReducer);
  if(!user.token){
    return <Navigate to={"/login"} replace />
  }
  return children;
};

export default ProtectedRoute;