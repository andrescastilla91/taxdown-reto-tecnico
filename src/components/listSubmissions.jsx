import React, { useEffect, useState } from "react";

const ListSubmissions = ({dataSubmission}) => {

  const [listSubmission, setListSubmission] = useState([]);

  useEffect(()=>{
    let list = [];
    list = dataSubmission[0].filter(element => element.data.taxeId === dataSubmission[1].id)
    setListSubmission(list)
  },[dataSubmission])

  return (
    <div className="card-body">
      <ul className="list-group" style={{maxHeight: "200px", overflowY: "auto"}}>
        {
          listSubmission.map((item)=>{
            return (
              <li key={Math.random()} className="list-group-item">
                <p>
                  <span className="text-muted">Name</span> {item.data.data.name} <br />
                  <span className="text-muted">Surname</span> {item.data.data.surname} <br />
                  <span className="text-muted">Age</span> {item.data.data.age} <br />
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default ListSubmissions;