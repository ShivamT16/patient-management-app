import React from 'react';
import './App.css';
import { PatientView } from './features/patient/PatientView';
import { WardView } from './features/ward/WardView';
import { PatientForm } from './features/patient/PatientForm';
import { WardForm } from './features/ward/WardForm';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { HospitalView } from './features/HospitalView';
import { WardDetail } from './features/ward/WardDetail';
import { PatientDetail } from './features/patient/PatientDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='nav'>
        <h2>Patient Management Application</h2>
        <NavLink className="navlink" to="/" >Dashboard</NavLink>
        <NavLink className="navlink" to="/patients" >Patients</NavLink>
        <NavLink className="navlink" to="/wards">Wards</NavLink>
        <NavLink className="navlink" to="https://github.com/ShivamT16/patient-management-app" target="_blank" >GitHub</NavLink>
        </nav>
        <Routes>
        <Route path="/" element={<HospitalView />} />
        <Route path="/patients" element={<PatientView />} />
        <Route path="/patients/details/:id" element={<PatientDetail />} />
        <Route path="/patients/add" element={<PatientForm />} />
        <Route path="/patients/update/:id" element={<PatientForm />} />
        <Route path="/wards" element={<WardView />} />
        <Route path="/wards/details/:wardName" element={<WardDetail />} />
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
