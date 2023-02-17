import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProtectedRoute from './components/protectedRoute';
import LoginPages from './pages/loginPages';
import DashboardPages from './pages/dashboardPages';
import TaxesPages from './pages/taxesPages';
import FormTaxPages from './pages/formTaxPages';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPages />} />
      <Route path='/dashboard' element={ 
        <ProtectedRoute><DashboardPages /></ProtectedRoute>
        }>
        <Route path='taxes' element={<TaxesPages />} />
        <Route path='formulario/:idTax' element={<FormTaxPages />}/>
      </Route>
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
    
  );
}

export default App;
