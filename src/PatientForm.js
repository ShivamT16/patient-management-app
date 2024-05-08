import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPatients, updatePatients } from "./patientSlice"
import { useParams } from "react-router-dom"

export const PatientForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const patient = useSelector((state) => state.patient.patient.find((item) => item._id === id))
    const wards = useSelector((state) => state.ward.ward)
    const [newPatient, setNewPatient] = useState({
        name: patient ? patient.name : "", 
        age: patient ? patient.age : "", 
        gender: patient ? patient.gender : "", 
        medicalHistory: patient ? patient.medicalHistory : "", 
        contact: patient ? patient.contact : "", 
        ward: patient ? patient.ward : ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewPatient({...newPatient, [name]: value })
    }

    const handleSubmit = () => {
    patient ? dispatch(updatePatients({id: patient._id, updatedPatient:newPatient})) : dispatch(addPatients(newPatient))
    }

    return(
        <div>
            <input type='text' name='name' value={newPatient.name} onChange={handleChange} autoComplete="off" placeholder='Patient Name' />
            <input type='number' name='age' value={newPatient.age} onChange={handleChange} autoComplete="off" placeholder="Age" />
            <select name='gender' value={newPatient.gender} onChange={handleChange} >
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
            </select>
            <input type='text' name='medicalHistory' value={newPatient.medicalHistory} onChange={handleChange} autoComplete="off" placeholder="Medical History" />
            <input type='number' name='contact' value={newPatient.contact} onChange={handleChange} autoComplete="off" placeholder="Contact Number" />
            <select name='ward' value={newPatient.ward} onChange={handleChange}>
               <option value="" >Ward</option>
               {wards.map((e) =>
               <option key={e._id}> {e.specialization} </option>)}
            </select>
            <button onClick={handleSubmit}>{patient ? "Update New Patient" : "Add New Patient" }</button>
        </div>
    )
}