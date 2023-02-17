import React from "react";
import FormTax from "../components/formTax";

const FormTaxPages = () => {
  return (
    <div className="card m-3">
      <div className="card-header">
        <h3>SUBMISSIONS OF PEOPLE TAXES</h3>
      </div>
      <div className="card-body">
        <p className="text-muted">Form to enter the basic information of the people who filed the tax in the season selected</p>
        <FormTax></FormTax>
      </div>
    </div>
  )
}

export default FormTaxPages;