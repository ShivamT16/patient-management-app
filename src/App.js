import React from 'react';
import './App.css';
import { PatientView } from './PatientView';
import { WardView } from './WardView';
import { PatientForm } from './PatientForm';
import { WardForm } from './WardForm';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { HospitalView } from './HospitalView';

function App() {
  return (
    <div className="App">
      <h2>Patient Management Application</h2>
      <Router>
        <nav>
        <NavLink to="/" >Dashboard</NavLink>
        <NavLink to="/patients" >Patients</NavLink>
        <NavLink to="/wards">Wards</NavLink>
        </nav>
        <Routes>
        <Route path="/" element={<HospitalView />} />
        <Route path="/patients" element={<PatientView />} />
        <Route path="/patients/add" element={<PatientForm />} />
        <Route path="/patients/update/:id" element={<PatientForm />} />
        <Route path="/wards" element={<WardView />} />
        <Route path="/wards/add" element={<WardForm />} />
        <Route path="wards/update/:id" element={<WardForm />} />
        <Route />
        <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
