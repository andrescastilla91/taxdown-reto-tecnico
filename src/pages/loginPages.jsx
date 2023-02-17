import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginComponents from '../components/loginComponents';

const LoginPages = () => {
  const navigate = useNavigate();
  useSelector((state) => {
    if(state.usersReducer.token) {
      navigate("/dashboard") ;
    } 
  });
  return (
    <div className="App background">
      <div className="container h-100">
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-4 mt-5 h-100">
              <div className="card shadow-lg text-center">
                <LoginComponents></LoginComponents>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default LoginPages;