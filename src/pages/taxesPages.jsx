import React from "react";

import TaxList from './../components/taxList'

const TaxesPages = () => {
  return (
    <div className="card m-3">
      <div className="card-header">
        <h3>LIST OF TAXES BY PERIOD</h3>
      </div>
      <div className="card-body">
        <p className="text-muted">Below you will find a list of taxes and their respective season. When selecting a tax you can enter or view the information of the people who filed the tax</p>
        <TaxList></TaxList>
      </div>
    </div>
  )
};

export default TaxesPages;