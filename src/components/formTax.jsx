import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getInputFields } from "../redux/actions/inputFieldsActions";
import { postSubmissionsPersonTax, setDefaultSubmission } from "../redux/actions/submissionsPersonTaxesActions";

const FormTax = () => {
  
  const dispach = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  
  let { idTax } = useParams();
  const respInput = useSelector((state)=>state.inputFieldsReducer);
  const respSubmissions = useSelector((state)=> {
    if(state.submissionsPersonTaxesReducer[0]['id']) return ['empty'];
    return state.submissionsPersonTaxesReducer
  });
  
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = (data) => {
    dispach(postSubmissionsPersonTax({taxeId: idTax, data}))
  }

  if(respSubmissions[0] !== 'empty' && message === ''){
    setMessage(respSubmissions);
    setTimeout(() => {
      setMessage('');
      dispach(setDefaultSubmission());
      navigate('/dashboard/taxes');
    }, 1500);
    
  }

  useEffect(()=>{
    dispach(getInputFields());
    dispach(setDefaultSubmission());
  },[]) // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        respInput[0]['id'] ? 
          <>
            <div className="row mb-2">
              {
                respInput.map((item)=>{
                  return(
                    <div key={Math.random()} className="col-4">
                      <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text" id="inputGroup-sizing-sm">{item.label}</span>
                        <input type={item.type} className="form-control" placeholder={item.placeholder}
                          {...register(item.id, {
                              required: 'Input is required',
                              maxLength: {
                                value: item.maxLength,
                                message: `The max length is ${item.maxLength}`
                              } 
                            })
                          }/>
                      </div>
                      <span className="text-danger">{errors[item.id]?.message}</span>
                    </div>
                  )
                })
              }
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success mt-3" type="submit">Submit</button>
              <Link className="btn btn-info mt-3 text-decoration-none" to={'/dashboard/taxes'} >Return</Link>
            </div>
            {
              message !== ''? 
              <>
                <div className="alert alert-success" role="alert">
                  {message}
                </div>
              </> : <></>
            }
          </> 
        : <></>
      }
    </form>
  )
}

export default FormTax;