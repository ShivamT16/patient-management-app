import React from 'react';
import './App.css';
import { PatientView } from './features/patient/PatientView';
import { WardView } from './features/ward/WardView';
import { PatientForm } from './features/patient/PatientForm';
import { WardForm } from './features/ward/WardForm';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { HospitalView } from './features/HospitalView';

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
