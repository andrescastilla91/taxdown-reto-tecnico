import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logOut } from "../redux/actions/usersActions";

const DashboardPages = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    navigate("/dashboard/taxes");
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="background">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand mb-0 h1">
            <Link className="text-decoration-none" to={"/dashboard/taxes"}>TaxDown</Link>
          </span>
          <div className="d-flex">
            <button onClick={()=>{dispatch(logOut())}} className='btn btn-danger'>Logout</button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
};

export default DashboardPages;