import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubmissionsPersonTax } from '../redux/actions/submissionsPersonTaxesActions';
import { getTaxList } from '../redux/actions/taxesActions';
import ListSubmissions from './listSubmissions';

const TaxList = () => {

  const [taxSelect, setTaxSelect] = useState({});
  const [listSubmission, setListSubmission] = useState([]);

  const dispatch = useDispatch();
  const response = useSelector((state)=>state.taxesReducer);
  const respSubmission = useSelector((state)=> state.submissionsPersonTaxesReducer);
  
  useEffect(()=>{
    setListSubmission([]);
    dispatch(getTaxList())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const showListSubmissions = (item) => {
    setListSubmission([]);
    dispatch(getSubmissionsPersonTax({taxeId: item.id}));
    setTaxSelect(item);
  }

  const closeListSubmission = () => {
    setTaxSelect({});
    setListSubmission([]); 
  }

  if(respSubmission[0] !== 'empty' && listSubmission.length === 0 && taxSelect.id){
    setListSubmission(respSubmission);
  }



  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {
            response.map((item)=>{
              return (
                <tr key={Math.random()}>
                  <th scope="row">{item.id}</th>
                  <td >{item.name}</td>
                  <td >{item.year}</td>
                  <td >
                    <Link className="btn btn-primary me-2" to={`/dashboard/formulario/${item.id}` }>New Submissions</Link>
                    <button className="btn btn-secondary" onClick={()=> showListSubmissions(item)} >View Submissions</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {
        listSubmission.length > 0?
        <>
          <div className="mt-2">
            <hr />
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4>List Submission Tax Season: {taxSelect['year']}</h4>
                <button className="btn btn-danger" onClick={()=> closeListSubmission() } >Close</button>
              </div>
              <ListSubmissions dataSubmission={[listSubmission, taxSelect]} /> 
            </div>
          </div>
        </> : <></>
      }
     
    </>
  )
}

export default TaxList;