import React from 'react';
import './App.css';
import { PatientView } from './PatientView';
import { WardView } from './WardView';
import { PatientForm } from './PatientForm';
import { WardForm } from './WardForm';

function App() {
  return (
    <div className="App">
      <h2>Redux App</h2>
      <PatientView />
      <PatientForm />
      <WardView />
      <WardForm />
    </div>
  );
}

export default App;
