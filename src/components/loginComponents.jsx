import React from "react";
import { setLogin } from "../redux/actions/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";


const LoginComponents = () =>{

  const dispatch = useDispatch();
  const response = useSelector((state)=>state.usersReducer);

  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    dispatch(setLogin(data))
  }

  return (
    <div className="card-body px-4">
      <h5 className="card-title">Inicio de Sesión</h5>
      <p className="card-text text-secondary mb-4">Una manera diferente de hacer las cosas.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="col-md-12 mb-4">
            <input 
              type="text" 
              placeholder="Username" 
              className="form-control"
              {...register('username', {required: 'Username is required'})}
              />
              <span className="text-danger">{errors.username?.message}</span>
        </div>
        <div className="col-md-12 mb-4">
          <input 
            type="password" 
            placeholder="Password" 
            className="form-control"
            {...register('password', {required: 'Password is required'})}
            />
            <span className="text-danger">{errors.password?.message}</span>
        </div>
        <div className="col-md-12">
            <button 
              type="submit" 
              className="btn btn-primary text-white w-100"
            >Login</button>
        </div>
      </form>
        {
          response.error_message && 
            <div className="alert alert-danger mt-2" role="alert">
              {response.error_message}
            </div>
        }
    </div>
  )
  
}

export default LoginComponents;